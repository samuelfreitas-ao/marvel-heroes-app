import { FlatList } from 'react-native'
import { Character } from '../../../domain/models'
import { CharacterItem } from '../character-item'

type CharacterListProps = {
	characters: Character[]
}

export function CharacterList({ characters }: CharacterListProps) {
	return (
		<FlatList
			data={characters}
			renderItem={({ item: character }) => <CharacterItem character={character} />}
			keyExtractor={({ id }) => id.toString()}
		/>
	)
}
