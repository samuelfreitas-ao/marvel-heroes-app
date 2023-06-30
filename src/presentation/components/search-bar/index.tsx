import { useCallback } from 'react'

import { Container, Input, Button, FormContent } from './styled'
import { IconSearch, IconSend } from '../icons'

export const SearchBar = () => {
	const handleInputChange = useCallback((text: string) => {
		console.log('Text', text)
	}, [])

	return (
		<Container>
			<FormContent>
				<IconSearch color="#999" size={24} />
				<Input
					placeholder="Pesquisar personagens da Marvel..."
					onChangeText={handleInputChange}
					placeholderTextColor={'#999'}
				/>
				<Button>
					<IconSend color="#000" size={24} />
				</Button>
			</FormContent>
		</Container>
	)
}
