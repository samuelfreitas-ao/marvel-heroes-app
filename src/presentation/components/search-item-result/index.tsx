import { memo, useCallback } from 'react'

import { Container } from './styled'
import { Character } from '../../../domain/models'
import { Text } from '../text'

type SearchItemResultProps = {
	character: Character
}

export const SearchItemResult = memo(({ character }: SearchItemResultProps) => {
	const handleSelect = useCallback(() => {
		// navigate(`/personagem/${character.id}`)
	}, [character])

	return (
		<Container onPress={handleSelect}>
			<Text text={character.name} />
		</Container>
	)
})
