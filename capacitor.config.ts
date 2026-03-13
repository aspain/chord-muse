import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.adamspain.strumforge',
  appName: 'StrumForge',
  webDir: 'dist/capacitor',
  ios: {
    contentInset: 'never',
    backgroundColor: '#f4ede2'
  }
};

export default config;
