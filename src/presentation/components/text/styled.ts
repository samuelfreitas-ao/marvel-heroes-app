import { styled } from 'styled-components/native'
import { THEME } from '../../styles'

export const Container = styled.Text<{ color?: string }>`
	font-size: 16px;
	color: ${(props) => props?.color ?? THEME.colors.gray[300]};
`
