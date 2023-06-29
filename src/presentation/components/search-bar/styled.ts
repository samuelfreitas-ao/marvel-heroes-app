import { styled } from 'styled-components/native'

export const Container = styled.View`
	display: flex;
	width: 100%;
	padding: 16px;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.5);
`
export const FormContent = styled.View`
	display: flex;
	flex-direction: row;
	position: relative;
	align-items: center;
	width: 100%;
	padding: 8px 16px;
	border-radius: 16px;
	background-color: rgba(0, 0, 0, 0.8);
`
export const Input = styled.TextInput`
	display: flex;
	flex: 1;
	font-size: 16px;
	color: #999999;
`
export const Button = styled.TouchableOpacity`
	border: none;
	background-color: transparent;
	border-radius: 4px;
	color: #999999;
	font-size: 24px;
	display: flex;
	padding: 4px;
	cursor: pointer;
`
export const SearchResultContent = styled.View`
	position: absolute;
	top: 50px;
	left: 0;
	width: calc(100% - 16px);
	padding: 8px;
	background-color: rgba(255, 255, 255, 0.9);
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
	z-index: 2;
`
