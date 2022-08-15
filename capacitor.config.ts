import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'me.daniromo.workclick',
  appName: 'workclick',
  webDir: 'dist/workclick',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
      launchAutoHide: true,
      androidScaleType: 'FIT_CENTER',
      splashImmersive: true
    },
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '414792500962-gerbmu2jo6kamtl5f26irohavcbka7ne.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    }
  }
};

export default config;
