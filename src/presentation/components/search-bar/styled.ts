import { styled } from 'styled-components/native'
import { THEME } from '../../styles'

export const Container = styled.View`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
`
export const FormContent = styled.View`
	display: flex;
	flex-direction: row;
	position: relative;
	align-items: center;
	width: 100%;
	padding: 0 16px;
	padding-right: 0;
	border-radius: 16px;
	background-color: rgba(0, 0, 0, 0.7);
	border: 1px solid ${THEME.colors.green[500]};
`
export const Input = styled.TextInput`
	display: flex;
	flex: 1;
	font-size: 16px;
	color: ${THEME.colors.gray[200]};
`
export const Button = styled.TouchableOpacity`
	border: none;
	background-color: ${THEME.colors.green[500]};
	border-radius: 0 16px 16px 0;
	font-size: 24px;
	display: flex;
	padding: 8px;
`
export const SearchResultContent = styled.View`
	position: absolute;
	display: flex;
	top: 40px;
	left: 0;
	padding: 8px;
	width: 100%;
	background-color: rgba(255, 255, 255, 0.9);
`
