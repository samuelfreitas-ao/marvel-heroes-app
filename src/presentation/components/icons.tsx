import {
	MaterialIcons,
	AntDesign,
	Ionicons,
	Entypo,
	FontAwesome5,
	FontAwesome,
	Fontisto
} from '@expo/vector-icons'
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
export const IconInfo = (props: IconProps) => (
	<Entypo name="info-with-circle" {...props} />
)
export const IconMenu = (props: IconProps) => <Ionicons name="md-menu" {...props} />
export const IconSearch = (props: IconProps) => <MaterialIcons name="search" {...props} />
export const IconSend = (props: IconProps) => <Ionicons name="send-sharp" {...props} />
export const IconSpinner = (props: IconProps) => <AntDesign name="loading1" {...props} />

export const IconGithub = (props: IconProps) => <AntDesign name="github" {...props} />
export const IconLinkedIn = (props: IconProps) => (
	<AntDesign name="linkedin-square" {...props} />
)
export const IconFacebook = (props: IconProps) => (
	<FontAwesome5 name="facebook" {...props} />
)
export const IconWhatsApp = (props: IconProps) => (
	<FontAwesome name="whatsapp" {...props} />
)
export const IconSite = (props: IconProps) => <Fontisto name="world" {...props} />
