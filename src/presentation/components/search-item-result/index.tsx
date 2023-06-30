import { memo, useCallback } from 'react'

import { Container } from './styled'
import { Character } from '../../../domain/models'
import { Text } from '../text'
import { useNavigation } from '@react-navigation/native'

type SearchItemResultProps = {
	character: Character
}

export const SearchItemResult = memo(({ character }: SearchItemResultProps) => {
	const { navigate } = useNavigation()
	const handleSelect = useCallback(() => {
		navigate('detail', { characterId: character.id })
	}, [character])

	return (
		<Container onPress={handleSelect}>
			<Text text={character.name} />
		</Container>
	)
})
