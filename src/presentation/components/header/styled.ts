import { Dimensions } from 'react-native'
import { styled } from 'styled-components/native'

const { width: screenWidth } = Dimensions.get('screen')

export const Container = styled.ImageBackground`
	display: flex;
	width: ${screenWidth}px;
	min-height: 192px;
	padding: 24px 8px;
	padding-bottom: 64px;
`
