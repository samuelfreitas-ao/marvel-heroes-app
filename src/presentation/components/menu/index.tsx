import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Image, Linking, Pressable, View } from 'react-native'
import { Animated, GestureResponderEvent, Modal } from 'react-native'
import { Dimensions } from 'react-native'
import { THEME } from '../../styles'
import { IconFacebook, IconGithub, IconLinkedIn, IconSite, IconWhatsApp } from '../icons'
import { MenuItem, MenuText } from './styled'
import { getPersonalInfo } from '../../../utils/data'
import { Text } from '../text'
import Toast from 'react-native-toast-message'

type MenuProps = {
	open: boolean
	onClose: () => void
}

const { name, site, github, facebook, linkedin, whatsAppLink } = getPersonalInfo()

const data = [
	{
		link: whatsAppLink,
		icon: IconWhatsApp,
		text: 'WhatsApp'
	},
	{
		link: linkedin,
		icon: IconLinkedIn,
		text: 'LinkedIn'
	},
	{
		link: github,
		icon: IconGithub,
		text: 'Github'
	},
	{
		link: facebook,
		icon: IconFacebook,
		text: 'Facebook'
	},
	{
		link: site,
		icon: IconSite,
		text: 'Portfólio'
	}
]
export function Menu({ open, onClose }: MenuProps) {
	const modalRef = useRef(null)
	const [show, setShow] = useState(false)
	const { width: screenWidth } = Dimensions.get('window')
	const [headerAnimation] = useState(new Animated.Value(-screenWidth))

	useEffect(() => {
		if (open) {
			setShow(true)
			Animated.spring(headerAnimation, {
				useNativeDriver: false,
				toValue: 0,
				speed: 1,
				bounciness: 100
			}).start()
		} else {
			headerAnimation.setValue(0)
			Animated.timing(headerAnimation, {
				useNativeDriver: false,
				toValue: -screenWidth,
				duration: 200
			}).start(({ finished }) => {
				if (finished) setShow(false)
			})
		}

		return () => {
			headerAnimation.setValue(-screenWidth)
		}
	}, [open])

	const handleClick = useCallback((e: GestureResponderEvent) => {
		if (e.target == modalRef.current) onClose()
	}, [])

	const handleOpenLink = useCallback(async (link: string) => {
		const supportedLink = await Linking.canOpenURL(link)
		if (supportedLink) {
			await Linking.openURL(link)
		} else {
			Toast.show({
				type: 'error',
				text1: 'Erro',
				text2: `URL não suportado ${link}`
			})
		}
	}, [])

	if (!show) return <></>
	return (
		<Modal transparent={true} animationType="fade">
			<Pressable
				ref={modalRef}
				onPress={handleClick}
				style={{
					flex: 1,
					backgroundColor: THEME.colors.transparent.black
				}}
			>
				<Animated.View
					style={[
						{
							backgroundColor: THEME.colors.gray[500],
							paddingVertical: 24,
							paddingHorizontal: 8,
							marginRight: 'auto',
							flex: 1,
							gap: 8
						},
						{ transform: [{ translateX: headerAnimation }] }
					]}
				>
					<View style={{ alignItems: 'center' }}>
						<Image
							source={{ uri: `${github}.png` }}
							style={{ width: 100, height: 100, borderRadius: 100 }}
						/>
					</View>
					<MenuText>{name}</MenuText>
					{data.map(({ icon: Icon, link, text }) => (
						<MenuItem key={link} onPress={() => handleOpenLink(link)}>
							<Icon size={24} color={THEME.colors.gray[200]} />
							<Text text={text} color={THEME.colors.gray[200]} style={{ fontSize: 20 }} />
						</MenuItem>
					))}
				</Animated.View>
			</Pressable>
		</Modal>
	)
}
