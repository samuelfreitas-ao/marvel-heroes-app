import { Dimensions, Platform } from 'react-native'
import { styled } from 'styled-components/native'

const { width } = Dimensions.get('screen')
const itemHeight = width - 48
const itemWidth = itemHeight

export const Container = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
`
export const ImageContainer = styled.View`
	display: flex;
	justify-content: center;
	background: #ffffff;
	border-radius: 32px;
	${Platform.select({
		ios: `
      shadow-color: #000000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.3;
      shadow-radius: 4px;
    `,
		android: `
      elevation: 8;
    `
	})}
`
export const Image = styled.Image<{ unavailable?: string }>`
	opacity: ${(props) => (props?.unavailable ? 0.6 : 0.8)};
	width: ${itemWidth}px;
	height: ${itemHeight}px;
	border-radius: 32px;
	/* border: 1px solid #444; */
`
export const BioContainer = styled.View`
	display: flex;
	flex-direction: column;
	gap: 16px;
	justify-content: center;
`
export const BioBody = styled.View`
	display: flex;
	flex-direction: column;
	gap: 16px;
`
