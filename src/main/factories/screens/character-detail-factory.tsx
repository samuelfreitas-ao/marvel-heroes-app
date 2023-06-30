import { CharacterDetail } from '../../../presentation/screens'
import { makeRemoteLoadCharacterDetail } from '../usecases'

export function MakeCharacterDetail() {
	return <CharacterDetail loadCharacters={makeRemoteLoadCharacterDetail()} />
}
