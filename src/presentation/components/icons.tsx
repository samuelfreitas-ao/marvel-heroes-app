import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons'
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
export const IconMenu = (props: IconProps) => <Ionicons name="md-menu" {...props} />
export const IconSearch = (props: IconProps) => <MaterialIcons name="search" {...props} />
export const IconSend = (props: IconProps) => <Ionicons name="send-sharp" {...props} />
export const IconSpinner = (props: IconProps) => <AntDesign name="loading1" {...props} />
