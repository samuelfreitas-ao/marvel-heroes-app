import { Header, Layout, LayoutBody, Text, Title } from '../../components'
import { SearchBar } from '../../components'

export function Home() {
	return (
		<Layout>
			<Header>
				<SearchBar />
			</Header>
			<LayoutBody>
				<Title>
					<Text text="Personagens" color="white" />
				</Title>
				<Text text="Olá" />
			</LayoutBody>
		</Layout>
	)
}
