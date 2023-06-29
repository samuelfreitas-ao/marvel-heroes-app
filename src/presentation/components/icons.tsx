import { MaterialIcons } from '@expo/vector-icons'
import { GestureResponderEvent } from 'react-native'

type IconProps = {
	color?: string
	size?: number
	style?: object
	onPress?: (event: GestureResponderEvent) => void
}

export const IconSearch = (props: IconProps) => <MaterialIcons name="search" {...props} />
export const IconBack = (props: IconProps) => (
	<MaterialIcons name="arrow-back" {...props} />
)
