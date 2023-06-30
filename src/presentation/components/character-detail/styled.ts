import { styled } from 'styled-components/native'

export const Container = styled.View`
	position: relative;
	display: grid;
	grid-template-columns: 6fr 4fr;
	justify-content: center;
	align-items: center;
	grid-gap: 16px;
	flex-direction: column;
	min-height: 100px;
`
export const ImageContainer = styled.View`
	display: flex;
	flex: 1;
	justify-content: center;
	position: relative;
	min-height: 100px;
`
export const Image = styled.Image<{ unavailable?: string }>`
	opacity: ${(props) => (props?.unavailable ? 0.6 : 0.8)};
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
	width: 80%;
	border-radius: 32px;
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
