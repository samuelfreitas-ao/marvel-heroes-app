import { Dimensions, StatusBar } from 'react-native'
import { styled } from 'styled-components/native'

const { width: screenWidth } = Dimensions.get('screen')

export const Container = styled.ImageBackground`
	display: flex;
	justify-content: center;
	width: ${screenWidth}px;
	min-height: 192px;
	padding: 24px 8px;
	padding-top: ${StatusBar.currentHeight || 0}px;
	/* padding-bottom: 64px; */
`
export const Content = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`
export const IconContent = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	margin-left: auto;
	background: #5a7e76;
	border: 1px solid #ccc;
	border-radius: 4px;
`
