import { useCallback, useRef, useState } from 'react'

import { IconSearch } from '..'
import { Container, Input, Button, FormContent } from './styled'

export const SearchBar = () => {
	const [query, setQuery] = useState('')
	const timeoutId = useRef<number>()

	const handleInputChange = useCallback((text: string) => {
		setQuery(text)
	}, [])

	return (
		<Container>
			<FormContent>
				<Button>
					<IconSearch color="#999" size={24} />
				</Button>
				<Input
					placeholder="Pesquisar personagens da Marvel..."
					onChangeText={handleInputChange}
					placeholderTextColor={'#999'}
				/>
			</FormContent>
		</Container>
	)
}
