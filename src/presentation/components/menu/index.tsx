import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Pressable, TextProps, TouchableOpacity, View } from 'react-native'
import { Animated, GestureResponderEvent, Modal } from 'react-native'
import { Dimensions } from 'react-native'
import { Text } from '../text'
import { THEME } from '../../styles'
import { IconSearch } from '../icons'

type MenuProps = {
	open: boolean
	onClose: () => void
}

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
							position: 'relative',
							backgroundColor: THEME.colors.gray[500],
							paddingVertical: 20,
							marginRight: 'auto',
							flex: 1,
							justifyContent: 'space-between'
						},
						{ transform: [{ translateX: headerAnimation }] }
					]}
				>
					<View>
						<MenuItems
							text={'Samuel'}
							icon={<IconSearch size={24} />}
							// textProps={{
							// 	style: {
							// 		fontFamily: THEME.fonts.heading,
							// 		fontSize: THEME.fontSizes.lg
							// 	}
							// }}
						/>
						<MenuItems text={'Samuel Freitas'} icon={<IconSearch size={18} />} />
					</View>
					<TouchableOpacity
						style={{
							// backgroundColor: THEME.colors.gray[200],
							justifyContent: 'flex-start',
							borderRadius: 0
						}}
						onPress={() => console.log('Saindo')}
					>
						<IconSearch size={24} />
						<Text text="Terminar sessão" />
					</TouchableOpacity>
				</Animated.View>
			</Pressable>
		</Modal>
	)
}

type MenuItemsProps = {
	text: string
	icon: React.ReactNode
	textProps?: TextProps
}

function MenuItems({ text, icon, textProps }: MenuItemsProps) {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				gap: 8,
				padding: 8
			}}
		>
			<View style={{ width: 24, alignItems: 'center' }}>{icon}</View>
			<Text text={text} {...textProps} />
		</View>
	)
}
