import { styled } from 'styled-components/native'

export const Container = styled.View`
	position: relative;
	display: flex;
	min-height: 100px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`
export const ImageContainer = styled.View`
	position: relative;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const ItemImage = styled.Image<{ unavailable?: string }>`
	opacity: ${(props) => (props?.unavailable ? 0.6 : 0.8)};
	width: 100%;
`
export const ItemTitle = styled.View`
	background-color: rgba(90, 126, 118, 0.8);
	position: absolute;
	bottom: 0;
	width: 100%;
`
