import { createStackNavigator } from '@react-navigation/stack'
import { MakeCharacterDetail, MakeHome, MakeSearch } from '../../main/factories/screens'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="home" component={MakeHome} />
			<Screen name="search" component={MakeSearch} />
			<Screen name="detail" component={MakeCharacterDetail} />
		</Navigator>
	)
}
