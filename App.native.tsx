import App from './src/Main'
import { NativeRouter } from 'react-router-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function NativeApp() {
  return (
    <NativeRouter>
      <SafeAreaProvider>
        <SafeAreaView>
          <App />
        </SafeAreaView>
      </SafeAreaProvider>
    </NativeRouter>
  )
}
