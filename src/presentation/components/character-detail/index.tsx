import { useCallback, useState } from 'react'
import { Character } from '../../../domain/models'
import { Container, ImageContainer, Image, BioBody, BioContainer } from './styled'
import { Text } from '../text'
import { Spinner } from '../spinner'
import { SerieList } from '../serie-list'

type CharacterCardDetailProps = {
	character: Character
}

export function CharacterCardDetail({ character }: CharacterCardDetailProps) {
	const [loadingImg, setLoadingImg] = useState(true)

	const { extension, path } = character.thumbnail
	const imgUrl = `${path}.${extension}`
	let imgUnavailable = ''
	if (imgUrl.includes('image_not_available')) {
		imgUnavailable = 'true'
	}
	const handleImageLoad = useCallback(() => {
		setLoadingImg(false)
	}, [])

	return (
		<Container>
			<ImageContainer>
				{loadingImg && <Spinner size={32} />}
				<Image
					source={{ uri: imgUrl }}
					unavailable={imgUnavailable}
					onLoad={handleImageLoad}
				/>
			</ImageContainer>
			<BioContainer>
				<Text style={{ fontSize: 24 }}>{character.name}</Text>
				<BioBody>
					{character.description || <Text text="Nenhuma descrição" />}
					{character.series.length > 0 && <SerieList series={character.series} />}
				</BioBody>
			</BioContainer>
		</Container>
	)
}
