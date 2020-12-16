import { WebPlugin } from '@capacitor/core';
import { BadgePlugin } from './definitions';

export class BadgeWeb extends WebPlugin implements BadgePlugin {
  constructor() {
    super({
      name: 'Badge',
      platforms: ['web'],
    });
  }

  async setBadgeCount(_options: { count: number }): Promise<{ success: boolean, value: number }> {
    return { success: false, value: 0 };
  }

  async clearBadgeCount(): Promise<{ success: boolean }> {
    return { success: false };
  }

  async hasPermission(): Promise<{ success: boolean }> {
    return { success: false };
  }

  async requestPermission(): Promise<{ success: boolean }> {
    return { success: false };
  }
}

const Badge = new BadgeWeb();

export { Badge };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Badge);
