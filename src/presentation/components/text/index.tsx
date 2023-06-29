import { ReactNode } from 'react'
import { TextProps } from 'react-native'
import { Container } from './styled'

type TextProp = TextProps & {
	children?: ReactNode
	text?: ReactNode
	color?: string
}

export function Text({ children, text, color, ...props }: TextProp) {
	return (
		<Container color={color} {...props}>
			{children ?? text}
		</Container>
	)
}
