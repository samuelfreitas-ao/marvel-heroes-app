import { Home } from '../../../presentation/screens'
import { makeRemoteLoadCharacter } from '../usecases'

export function MakeHome() {
	return <Home loadCharacters={makeRemoteLoadCharacter()} />
}
