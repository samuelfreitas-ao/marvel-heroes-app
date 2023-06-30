import { ReactNode, useState } from 'react'
import { Container, Content, MenuButton } from './styled'
import banner from '../../../assets/images/Banner.png'
import { IconMenu } from '../icons'
import { Menu } from '../menu'
type HeaderProps = {
	children?: ReactNode
}
export function Header({ children }: HeaderProps) {
	const [openModal, setOpenModal] = useState<boolean>(false)
	return (
		<Container source={banner}>
			<Content>
				{children}
				<MenuButton onPress={() => setOpenModal(true)}>
					<IconMenu size={36} color="white" />
				</MenuButton>
			</Content>
			<Menu open={openModal} onClose={() => setOpenModal(false)} />
		</Container>
	)
}
