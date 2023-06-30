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
	/* z-index: 1; */
`
