import { ExpoConfig } from 'expo/config'

export default (): ExpoConfig => ({
  name: 'Native TS',
  slug: 'native-ts',
  version: '1.0.0',
  orientation: 'default',
  userInterfaceStyle: 'dark',

  assetBundlePatterns: ['**/*'],
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },

  android: {
    package: 'com.anonymous.nativets',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  ios: {
    supportsTablet: true,
  },
  web: {
    favicon: './assets/favicon.png',
  },
})
