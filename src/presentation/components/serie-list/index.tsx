import { Serie } from '../../../domain/models'
import { Text } from '../text'
import { Container, Item, List, Title } from './styled'

type SerieProps = {
	series: Serie[]
}

export function SerieList({ series }: SerieProps) {
	return (
		<Container>
			<Title>
				<Text
					text="Participação em séries"
					style={{ fontWeight: 'bold', fontSize: 20 }}
				/>
				<Text text={`(${series.length})`} />
			</Title>
			<List>
				{series.map((serie) => (
					<Item key={serie.name}>
						<Text text={`- ${serie.name}`} />
					</Item>
				))}
			</List>
		</Container>
	)
}
