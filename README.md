# Capacitor Badge Plugin

[![npm](https://img.shields.io/npm/v/fancy-notifications.svg)](https://www.npmjs.com/package/fancy-notifications)
[![npm](https://img.shields.io/npm/dt/fancy-notifications.svg?label=npm%20downloads)](https://www.npmjs.com/package/fancy-notifications)

## Installation

- `npm i capacitor-badge-plugin --save`

## Usage

```typescript
import "capacitor-badge-plugin";
import { Plugins } from "@capacitor/core";

const { Badge } = Plugins;

function updateBadgeCount() {
  Badge.hasPermission()
    .then((value) => (value.success ? value : Badge.requestPermission()))
    .then((res) => (res.success ? Badge.setBadgeCount({ count: 12 }) : res));
}
```

It’s important to also add the import line: `import 'capacitor-badge-plugin';` (as specified in the package.json) because this will actually trigger the web registration of your plugin – otherwise the web part of it won’t work!

### Android

Register the badge plugin in your Capacitor app.

```java
// Other imports...
import com.seppedev.plugins.badge.Badge; // << #1 Add import

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(Badge.class); // << #2 Register plugin
    }});
  }
}

```

## Api

| Method            | Type                                        |
| ----------------- | ------------------------------------------- |
| hasPermission     | `Promise<{success:boolean}>`                |
| requestPermission | `Promise<{success:boolean}>`                |
| setBadgeCount     | `Promise<{success:boolean, value: number}>` |
| clearBadgeCount   | `Promise<{success:boolean}>`                |

## Building

To build the plugin locally it's important to run `npm run build` everytime you change something in the capacitor-badge-plugin directory. After that always run `npx cap sync` in the demo app to use the latest version of the plugin. Or use

```console
$ cd demo
$ ng build && npx cap sync && npx cap copy ios && npx cap open ios`
```
