import { styled } from 'styled-components/native'
import { THEME } from '../../styles'

export const Container = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${THEME.colors.gray[600]};
	padding: 8px;
`
export const Button = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	gap: 4px;
	align-items: center;
	justify-content: center;
	padding: 4px 8px;
	margin-right: auto;
	background-color: ${THEME.colors.gray[600]};
	border-radius: 8px;
`
