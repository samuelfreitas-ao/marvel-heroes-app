import { ReactNode, useCallback } from 'react'

import { Button, Container } from './styled'
import { IconBack } from '../icons'
import { Text } from '../text'
import { IScreen } from '../../../@types'
import { useNavigation } from '@react-navigation/native'

type TitleProps = {
	children: ReactNode
	backTo?: keyof IScreen
}

export function Title({ children, backTo }: TitleProps) {
	const { navigate } = useNavigation()
	const handleBackHome = useCallback(() => {
		navigate(backTo ?? 'home')
	}, [])

	return (
		<>
			<Container>{children}</Container>
			{backTo && (
				<Button onPress={handleBackHome}>
					<IconBack size={16} color="#fff" />
					<Text text="Home" color="#fff" />
				</Button>
			)}
		</>
	)
}
