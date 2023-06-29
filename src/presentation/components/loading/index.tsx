import { ReactNode } from 'react'
import { Container } from './styled'
import { Spinner } from '../spinner'
import { Text } from '../text'

type LoadingProps = {
	data?: ReactNode
}

export function Loading({ data }: LoadingProps) {
	return (
		<Container>
			<Spinner color={'#666'} />
			{data && <Text text={data} />}
		</Container>
	)
}
