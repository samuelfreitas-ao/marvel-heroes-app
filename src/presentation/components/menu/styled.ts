import { styled } from 'styled-components/native'
import { THEME } from '../../styles'

export const MenuItem = styled.TouchableOpacity`
	padding: 8px 16px;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`
export const MenuText = styled.Text`
	padding: 8px;
	color: ${THEME.colors.white};
	font-size: 24px;
`
