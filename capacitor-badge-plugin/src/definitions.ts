declare module '@capacitor/core' {
  interface PluginRegistry {
    Badge: BadgePlugin;
  }
}

export interface BadgePlugin {
  setBadgeCount(options: { count: number }): Promise<{ success: boolean, value: number }>;

  clearBadgeCount(): Promise<{ success: boolean }>;

  requestPermission(): Promise<{ success: boolean }>;

  hasPermission(): Promise<{ success: boolean }>;
}
