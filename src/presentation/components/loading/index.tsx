import { ReactNode } from 'react'
import { Container } from './styled'
import { Spinner } from '../spinner'
import { Text } from '../text'
import { THEME } from '../../styles'

type LoadingProps = {
	data?: ReactNode
}

export function Loading({ data }: LoadingProps) {
	return (
		<Container>
			<Spinner color={THEME.colors.gray[300]} />
			{data && <Text text={data} />}
		</Container>
	)
}
