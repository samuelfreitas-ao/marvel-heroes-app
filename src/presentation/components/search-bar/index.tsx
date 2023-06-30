import { useCallback, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container, Input, Button, FormContent, SearchResultContent } from './styled'
import { IconSearch, IconSend } from '../icons'
import { Character } from '../../../domain/models'
import { LoadCharacters, LoadCharactersMetadata } from '../../../domain/usecases'
import { SearchListResult } from '../search-list-result'

type SearchBarProps = {
	loadSearch: LoadCharacters
}
export const SearchBar = ({ loadSearch }: SearchBarProps) => {
	const navigator = useNavigation()
	const [query, setQuery] = useState('')
	const [queryResult, setQueryResult] = useState<Character[]>([])
	const [metaData, setMetaData] = useState<LoadCharactersMetadata>(
		{} as LoadCharactersMetadata
	)
	const [message, setMessage] = useState('')
	const [showSearchResult, setShowSearchResult] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const timeoutId = useRef<any>()

	const fetchData = useCallback(
		async (search: string) => {
			setIsLoading(true)
			// resetData()
			try {
				const { data, metaData } = await loadSearch.loadAll({
					params: { nameStartsWith: search }
				})
				console.log('data', data)

				setQueryResult(data)
				setMetaData(metaData)
				if (data.length < 1) {
					setMessage('Nenhum resultado')
				}
			} catch (error: any) {
				alert(error?.message)
			} finally {
				setIsLoading(false)
			}
		},
		[loadSearch]
	)

	const handleSearch = useCallback(
		(newSearchQuery: string) => {
			setMessage(newSearchQuery.length < 1 ? 'Escreva algum nome' : 'Continue escrevendo')
			clearTimeout(timeoutId.current)
			timeoutId.current = setTimeout(() => {
				if (newSearchQuery?.trim() !== '' && newSearchQuery?.trim().length > 1) {
					setMessage('')
					fetchData(newSearchQuery)
				} else {
					// resetData()
				}
			}, 900)
		},
		[fetchData]
	)
	const handleInputChange = useCallback(
		(text: string) => {
			const newSearchQuery = text
			setQuery(newSearchQuery)
			// handleSearch(newSearchQuery)
		},
		[handleSearch]
	)

	const toggleShowSearchResult = useCallback(() => {
		const show = !showSearchResult
		setMessage(show && query.trim().length < 2 ? 'Escreva algum nome' : '')
		// setTimeout(() => {
		// 	setShowSearchResult(show)
		// }, 200)
	}, [showSearchResult, query])

	const handleSubmit = useCallback(() => {
		navigator.navigate('search', { query })
	}, [navigator, query])

	return (
		<Container>
			<FormContent>
				<IconSearch color="#999" size={24} />
				<Input
					placeholder="Pesquisar personagens da Marvel..."
					onChangeText={handleInputChange}
					placeholderTextColor={'#999'}
					onFocus={toggleShowSearchResult}
					onBlur={toggleShowSearchResult}
				/>
				<Button onPress={handleSubmit}>
					<IconSend color="#000" size={24} />
				</Button>
				{showSearchResult && (
					<SearchResultContent>
						<SearchListResult
							characters={queryResult}
							metadata={metaData}
							message={message}
							isLoading={isLoading}
						/>
					</SearchResultContent>
				)}
			</FormContent>
		</Container>
	)
}
