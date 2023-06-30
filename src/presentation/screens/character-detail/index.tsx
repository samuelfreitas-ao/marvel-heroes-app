import { useCallback, useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import {
	Header,
	CharacterCardDetail,
	Layout,
	LayoutBody,
	Loading,
	Title,
	Text
} from '../../components'
import { Character } from '../../../domain/models'
import { LoadCharacterDetail } from '../../../domain/usecases'

type CharacterDetailProps = {
	loadCharacters: LoadCharacterDetail
}
export function CharacterDetail({ loadCharacters }: CharacterDetailProps) {
	const { params } = useRoute<any>()
	const characterId = params?.characterId

	const [character, setCharacter] = useState<Character>()
	const [isLoading, setIsLoading] = useState(true)

	const fetchCharacters = useCallback(async () => {
		if (!characterId) return
		try {
			const httpResponse = await loadCharacters.loadAll({ characterId: characterId })
			setCharacter(httpResponse)
		} catch (error: any) {
			Toast.show({
				type: 'error',
				text1: 'Erro',
				text2: error.message
			})
		} finally {
			setIsLoading(false)
		}
	}, [loadCharacters, characterId])

	useEffect(() => {
		fetchCharacters()
	}, [fetchCharacters])

	return (
		<Layout>
			<Header />
			<LayoutBody>
				<Title backTo="home">
					<Text text={`Personagem: ${character?.name ?? ''}`} color="#fff" />
				</Title>
				{isLoading ? (
					<Loading data="Carregando personagem..." />
				) : !character ? (
					<Text text="Personagem não encontrado" />
				) : (
					character?.name && <CharacterCardDetail character={character} />
				)}
			</LayoutBody>
		</Layout>
	)
}
