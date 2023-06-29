import { FlatList } from 'react-native'
import { CharacterItem } from '..'
import { Character } from '../../../domain/models'

type CharacterListProps = {
	characters: Character[]
}

export function CharacterList({ characters }: CharacterListProps) {
	return (
		<FlatList
			data={characters}
			renderItem={({ item }) => <CharacterItem character={item} />}
			keyExtractor={(character: Character) => character.id.toString()}
		/>
	)
}
