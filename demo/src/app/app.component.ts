import 'capacitor-badge-plugin';
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Badge } = Plugins;

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <div>
        <h1>Count: {{count}}</h1>
        <button
          class="btn first"
          (click)="incrementBadge()">
          Increment
        </button>
        <button
          class="btn"
          (click)="clearBadge()">
          Clear Badge
        </button>
        <pre>{{error}}</pre>
      </div>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'demo';
  public count = 0;
  public error: string;

  public incrementBadge(): void {
    const count = this.count + 1;

    Badge.hasPermission()
      .then(value => {
        console.log('hasPermission', value.success);
        return value.success ? value : Badge.requestPermission()
      })
      .then(res => res.success ? Badge.setBadgeCount({ count }) : res)
      .then(res => {
        res.success
          ? this.count = count
          : this.error = 'Couldn\'t set badge'

        console.log(res, this.count);
      });
  }

  public clearBadge(): void {
    this.count = 0;
    console.log(this.count);
    Badge.clearBadgeCount()
  }
}
