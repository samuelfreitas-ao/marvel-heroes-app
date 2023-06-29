import { Home } from '../../../presentation/screens'
import { makeRemoteLoadHeroes } from '../usecases'

export function MakeHome() {
	return <Home loadCharacters={makeRemoteLoadHeroes()} />
}
