import { ReactNode } from 'react'
import { Container, Content, IconContent } from './styled'
import banner from '../../../assets/images/Banner.png'
import { IconMenu } from '../icons'
type HeaderProps = {
	children?: ReactNode
}
export function Header({ children }: HeaderProps) {
	return (
		<Container source={banner}>
			<Content>
				{children}
				<IconContent>
					<IconMenu size={36} color="white" />
				</IconContent>
			</Content>
		</Container>
	)
}
