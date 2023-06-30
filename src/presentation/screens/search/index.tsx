import { useCallback, useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
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

type SearchProps = {
	loadCharacters: LoadCharacters
}
export function Search({ loadCharacters }: SearchProps) {
	const { params } = useRoute<any>()

	const query = params?.query

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
				const { data, metaData } = await loadCharacters.loadAll({
					params: { nameStartsWith: query, offset }
				})
				setCharacters(data)
				setMetaData(metaData)
			} catch (error: any) {
				console.log('Error', error.message)
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
				<Title backTo="home">
					<Text text={`Pesquisa: ${query}`} color="white" />
				</Title>
				{isLoading ? (
					<Loading data="Pesquisando personagens..." />
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
