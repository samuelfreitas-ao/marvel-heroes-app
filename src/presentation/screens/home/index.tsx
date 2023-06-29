import { useCallback, useEffect, useState } from 'react'
import { LoadCharacters } from '../../../domain/usecases'
import {
	CharacterList,
	Header,
	Layout,
	LayoutBody,
	Loading,
	Text,
	Title
} from '../../components'
import { SearchBar } from '../../components'
import { Character } from '../../../domain/models'

type HomeProps = {
	loadCharacters: LoadCharacters
}
export function Home({ loadCharacters }: HomeProps) {
	const [Characters, setCharacters] = useState<Character[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const fetchCharacters = useCallback(
		async (offset: number) => {
			try {
				const { data } = await loadCharacters.loadAll({ params: { offset } })
				setCharacters(data)
			} catch (error: any) {
				console.log('Error', error.message)
			} finally {
				setIsLoading(false)
			}
		},
		[loadCharacters]
	)

	useEffect(() => {
		fetchCharacters(0)
		console.log('Loading..')
	}, [fetchCharacters])

	return (
		<Layout>
			<Header>
				<SearchBar />
			</Header>
			<LayoutBody>
				<Title>
					<Text text={`Personagens`} color="white" />
				</Title>
				{isLoading ? (
					<Loading data="Carregando personagens..." />
				) : (
					<CharacterList characters={Characters} />
				)}
			</LayoutBody>
		</Layout>
	)
}
