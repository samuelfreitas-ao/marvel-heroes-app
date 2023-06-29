import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { GestureResponderEvent } from 'react-native'

export type IconProps = {
	color?: string
	size?: number
	style?: object
	onPress?: (event: GestureResponderEvent) => void
}

export const IconBack = (props: IconProps) => (
	<MaterialIcons name="arrow-back" {...props} />
)
export const IconSearch = (props: IconProps) => <MaterialIcons name="search" {...props} />
export const IconSpinner = (props: IconProps) => <AntDesign name="loading1" {...props} />
