import { memo, useCallback, useState } from 'react'
import { ImageContainer, Container, ItemImage, ItemTitle } from './styled'
import { Character } from '../../../domain/models'
import { Spinner } from '../spinner'
import { Text } from '../text'
import { useNavigation } from '@react-navigation/native'

type CharacterItemProps = {
	character: Character
}

export const CharacterItem = memo(({ character }: CharacterItemProps) => {
	const { navigate } = useNavigation()
	const [loadingImg, setLoadingImg] = useState(true)

	const { extension, path } = character.thumbnail
	const imgUrl = `${path}/standard_fantastic.${extension}`
	let imgUnavailable = ''
	if (imgUrl.includes('image_not_available')) {
		imgUnavailable = 'true'
	}

	const handleImageLoad = useCallback(() => {
		setLoadingImg(false)
	}, [])

	const handleOpenDetail = useCallback(() => {
		navigate('detail', { character })
	}, [character.id, navigate])

	return (
		<Container onPress={handleOpenDetail}>
			<ImageContainer>
				{loadingImg && <Spinner size={32} />}
				<ItemImage
					source={{ uri: imgUrl }}
					unavailable={imgUnavailable}
					onLoad={handleImageLoad}
				/>
			</ImageContainer>
			<ItemTitle>
				<Text text={character.name} color="white" style={{ fontSize: 24 }} />
			</ItemTitle>
		</Container>
	)
})
