import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vins.app',
  appName: 'NetBill',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;