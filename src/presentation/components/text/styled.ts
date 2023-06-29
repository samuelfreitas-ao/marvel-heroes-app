import { styled } from 'styled-components/native'

export const Container = styled.Text<{ color?: string }>`
	font-size: 16px;
	color: ${(props) => props?.color ?? '#666'};
`
