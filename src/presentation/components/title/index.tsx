import { ReactNode, useCallback } from 'react'

import { Button, Container } from './styled'
import { View } from 'react-native'
import { IconBack } from '../icons'
import { Text } from '../text'

type TitleProps = { children: ReactNode; backTo?: string }

export function Title({ children, backTo }: TitleProps) {
	const handleBackHome = useCallback(() => {
		console.log('Backing')
	}, [])

	return (
		<>
			<Container>{children}</Container>
			{backTo && (
				<View>
					<Button onPress={handleBackHome}>
						<IconBack />
						<Text text="Home" />
					</Button>
				</View>
			)}
		</>
	)
}
