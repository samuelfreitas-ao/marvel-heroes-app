import { useCallback, useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'

import { LoadCharacters, LoadCharactersMetadata } from '../../../domain/usecases'
import {
	CharacterList,
	Header,
	Layout,
	LayoutBody,
	Loading,
	Pagination,
	Text,
	Title
} from '../../components'
import { SearchBar } from '../../components'
import { Character } from '../../../domain/models'

type HomeProps = {
	loadCharacters: LoadCharacters
}
export function Home({ loadCharacters }: HomeProps) {
	const [characters, setCharacters] = useState<Character[]>([])
	const [metaData, setMetaData] = useState<LoadCharactersMetadata>(
		{} as LoadCharactersMetadata
	)
	const [isLoading, setIsLoading] = useState(true)
	const [isReloading, setIsReloading] = useState(false)
	const [selectedPage, setSelectedPage] = useState(0)

	const fetchCharacters = useCallback(
		async (offset: number) => {
			try {
				const { data, metaData } = await loadCharacters.loadAll({ params: { offset } })
				setCharacters(data)
				setMetaData(metaData)
			} catch (error: any) {
				Toast.show({
					type: 'error',
					text1: 'Erro',
					text2: error.message
				})
			} finally {
				setIsLoading(false)
				setIsReloading(false)
			}
		},
		[loadCharacters]
	)

	useEffect(() => {
		fetchCharacters(0)
	}, [fetchCharacters])

	const onChangePage = (page: number) => {
		setSelectedPage(page)
		setIsReloading(true)
		fetchCharacters(page * metaData.limit)
	}

	return (
		<Layout>
			<Header>
				<SearchBar loadSearch={loadCharacters} />
			</Header>
			<LayoutBody>
				<Title>
					<Text text={`Personagens da Marvel`} color="white" />
				</Title>
				{isLoading ? (
					<Loading data="Carregando personagens..." />
				) : (
					<CharacterList characters={characters} />
				)}
				<Pagination
					metaData={metaData}
					onChangePage={onChangePage}
					page={selectedPage}
					isLoading={isReloading}
				/>
			</LayoutBody>
		</Layout>
	)
}
