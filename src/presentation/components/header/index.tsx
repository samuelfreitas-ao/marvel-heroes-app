import { ReactNode } from 'react'
import { Container } from './styled'
import banner from '../../../assets/images/Banner.png'
type HeaderProps = {
	children?: ReactNode
}
export function Header({ children }: HeaderProps) {
	return <Container source={banner}>{children}</Container>
}
