import { useCallback } from 'react'

import { Container, Input, Button, FormContent } from './styled'
import { IconSearch } from '../icons'

export const SearchBar = () => {
	const handleInputChange = useCallback((text: string) => {
		console.log('Text', text)
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
