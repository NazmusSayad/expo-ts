import WebApp from './App.web'
import NativeApp from './App.native'
import { Platform } from 'react-native'

export default function App() {
  return Platform.OS === 'web' ? <WebApp /> : <NativeApp />
}
