import { ReactNode } from 'react'
import { Body, Container } from './styled'

type LayoutProps = {
	children: ReactNode
	title?: string
}
export function Layout({ children }: LayoutProps) {
	return <Container>{children}</Container>
}

type LayoutBodyProps = {
	children: ReactNode
}
export function LayoutBody({ children }: LayoutBodyProps) {
	return <Body>{children}</Body>
}
