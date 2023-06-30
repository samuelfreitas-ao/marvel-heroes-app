import { Search } from '../../../presentation/screens'
import { makeRemoteLoadCharacter } from '../usecases'

export function MakeSearch() {
	return <Search loadCharacters={makeRemoteLoadCharacter()} />
}
