import { styled } from 'styled-components/native'
import { THEME } from '../../styles'

export const Container = styled.View`
	margin: 8px;
	display: flex;
	flex-direction: row;
	gap: 8px;
`
export const List = styled.View`
	display: flex;
	flex-direction: row;
	gap: 12px;
	padding: 0;
`
export const Item = styled.View`
	display: flex;
	flex-direction: row;
	gap: 12px;
	padding: 0;
`
export const Button = styled.TouchableOpacity`
	opacity: ${(props) => (props.disabled ? 0.4 : 1)};
	border: 1px solid ${THEME.colors.gray[400]};
	padding: 2px 8px;
	border-radius: 4px;
`
