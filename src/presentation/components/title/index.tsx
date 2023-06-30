import { useCallback } from 'react'

import { Button, Container } from './styled'
import { IconBack } from '../icons'
import { Text } from '../text'
import { IScreen } from '../../../@types'
import { useNavigation } from '@react-navigation/native'

type TitleProps = {
	title: string
	backTo?: keyof IScreen
}

export function Title({ title, backTo }: TitleProps) {
	const { goBack } = useNavigation()
	const handleBackHome = useCallback(() => {
		goBack()
	}, [])

	return (
		<>
			<Container>
				<Text text={title} color="#fff" style={{ fontSize: 20 }} />
			</Container>
			{backTo && (
				<Button onPress={handleBackHome}>
					<IconBack size={16} color="#fff" />
					<Text text="Voltar" color="#fff" />
				</Button>
			)}
		</>
	)
}
