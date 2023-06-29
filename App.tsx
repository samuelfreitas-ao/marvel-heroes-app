import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './src/presentation/routes'

export default function App() {
	return (
		<SafeAreaProvider>
			<StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0.5)" translucent />
			<NavigationContainer>
				<AppRoutes />
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
