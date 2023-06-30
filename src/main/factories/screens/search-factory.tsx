import { Search } from '../../../presentation/screens'
import { makeRemoteLoadHeroes } from '../usecases'

export function MakeSearch() {
	return <Search loadCharacters={makeRemoteLoadHeroes()} />
}
