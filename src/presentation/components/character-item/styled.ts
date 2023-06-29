import { Dimensions } from 'react-native'
import { styled } from 'styled-components/native'

const { width: screenWidth } = Dimensions.get('screen')

const itemHeight = screenWidth - 32

export const Container = styled.View`
	position: relative;
	display: flex;
	flex: 1;
	margin-bottom: 16px;
	height: ${itemHeight}px;
`
export const ImageContainer = styled.View`
	justify-content: center;
	align-items: center;
`
export const ItemImage = styled.Image<{ unavailable?: string }>`
	opacity: ${(props) => (props?.unavailable ? 0.6 : 0.8)};
	width: 100%;
	height: ${itemHeight}px;
`
export const ItemTitle = styled.View`
	background-color: rgba(90, 126, 118, 0.8);
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 4px;
`
