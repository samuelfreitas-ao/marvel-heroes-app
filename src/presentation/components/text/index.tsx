import { ReactNode } from 'react'
import { Container } from './styled'

type TextProps = {
	children?: ReactNode
	text?: ReactNode
}

export function Text({ children, text }: TextProps) {
	return <Container>{children ?? text}</Container>
}
