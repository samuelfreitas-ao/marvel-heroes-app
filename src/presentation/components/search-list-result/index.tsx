import { Character } from '../../../domain/models'
import { LoadCharactersMetadata } from '../../../domain/usecases'
import { SearchItemResult } from '../search-item-result'
import { Spinner } from '../spinner'
import { Text } from '../text'
import { Container, CountResult, List, Title } from './styled'

type SearchListResultProps = {
	characters: Character[]
	metadata: LoadCharactersMetadata
	message?: string
	isLoading?: boolean
}

export function SearchListResult({
	characters,
	metadata,
	message,
	isLoading
}: SearchListResultProps) {
	return (
		<Container>
			<Title>
				<Text text={message} />
				{isLoading && <Spinner />}
			</Title>
			<List>
				{characters.map((character) => (
					<SearchItemResult key={`search-item-${character.id}`} character={character} />
				))}
			</List>
			{metadata?.count && (
				<CountResult>
					<Text text={metadata.count} />
					<Text text="-" />
					<Text text={metadata.total} />
				</CountResult>
			)}
		</Container>
	)
}
