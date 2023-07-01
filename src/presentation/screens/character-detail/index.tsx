import { useRoute } from '@react-navigation/native'

import {
	Header,
	CharacterCardDetail,
	Layout,
	LayoutBody,
	Title,
	Text
} from '../../components'
import { Character } from '../../../domain/models'

export function CharacterDetail() {
	const { params } = useRoute<any>()
	const character: Character = {
		...params?.character,
		series: params?.character?.series?.items
	}
	return (
		<Layout>
			<Header />
			<LayoutBody>
				<Title backTo="home" title={`Personagem: ${character?.name ?? ''}`} />
				{!character ? (
					<Text text="Personagem não encontrado" />
				) : (
					character?.name && <CharacterCardDetail character={character} />
				)}
			</LayoutBody>
		</Layout>
	)
}
