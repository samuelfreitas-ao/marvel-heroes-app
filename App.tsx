import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Home } from './src/presentation/screens'
import { StatusBar } from 'react-native'

export default function App() {
	return (
		<SafeAreaProvider>
			<StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
			<Home />
		</SafeAreaProvider>
	)
}
