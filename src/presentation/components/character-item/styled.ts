import { Dimensions } from 'react-native'
import { styled } from 'styled-components/native'

const { width } = Dimensions.get('screen')

const itemHeight = width - 32
const itemWidth = itemHeight

export const Container = styled.View`
	position: relative;
	display: flex;
	margin-bottom: 16px;
	height: ${itemHeight}px;
`
export const ImageContainer = styled.View`
	justify-content: center;
	align-items: center;
	height: ${itemHeight}px;
`
export const ItemImage = styled.Image<{ unavailable?: string }>`
	opacity: ${(props) => (props?.unavailable ? 0.6 : 0.8)};
	width: ${itemWidth}px;
	height: ${itemHeight}px;
`
export const ItemTitle = styled.View`
	background-color: rgba(90, 126, 118, 0.8);
	position: absolute;
	bottom: 0;
	width: ${itemWidth}px;
	padding: 4px;
`
