import { useCallback, useState } from 'react'
import { Character } from '../../../domain/models'
import { Container, ImageContainer, Image, BioBody, BioContainer } from './styled'
import { Text } from '../text'
import { Spinner } from '../spinner'
import { SerieList } from '../serie-list'
import { Animated, Dimensions, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

type CharacterCardDetailProps = {
	character: Character
}

export function CharacterCardDetail({ character }: CharacterCardDetailProps) {
	const [loadingImg, setLoadingImg] = useState(true)
	const [imageAnimation] = useState(new Animated.Value(-screenWidth))
	const [descriptionAnimation] = useState(new Animated.Value(screenHeight))

	const { extension, path } = character.thumbnail
	const imgUrl = `${path}.${extension}`
	let imgUnavailable = ''
	if (imgUrl.includes('image_not_available')) {
		imgUnavailable = 'true'
	}

	const handleAnimation = useCallback(() => {
		Animated.parallel([
			Animated.spring(imageAnimation, {
				useNativeDriver: false,
				toValue: 0,
				speed: 1,
				bounciness: 100
			}),
			Animated.spring(descriptionAnimation, {
				useNativeDriver: false,
				toValue: 0,
				speed: 1,
				bounciness: 100
			})
		]).start()

		return () => {
			imageAnimation.setValue(-screenWidth)
			descriptionAnimation.setValue(screenHeight)
		}
	}, [])

	useFocusEffect(handleAnimation)

	const handleImageLoad = useCallback(() => {
		setLoadingImg(false)
	}, [])

	return (
		<ScrollView>
			<Container>
				<Animated.View style={{ transform: [{ translateX: imageAnimation }] }}>
					<ImageContainer>
						{loadingImg && <Spinner size={32} />}
						<Image
							source={{ uri: imgUrl }}
							unavailable={imgUnavailable}
							onLoad={handleImageLoad}
						/>
					</ImageContainer>
				</Animated.View>
				<Animated.View style={{ transform: [{ translateY: descriptionAnimation }] }}>
					<BioContainer>
						<Text style={{ fontSize: 24, fontWeight: 'bold' }}>{character.name}</Text>
						<BioBody>
							{character.description ? (
								<Text text={character.description} />
							) : (
								<Text text="Nenhuma descrição" />
							)}
							{character.series.length > 0 && <SerieList series={character.series} />}
						</BioBody>
					</BioContainer>
				</Animated.View>
			</Container>
		</ScrollView>
	)
}
