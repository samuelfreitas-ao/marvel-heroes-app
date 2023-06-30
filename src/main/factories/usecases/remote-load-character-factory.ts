import { RemoteLoadCharacters } from '../../../data/usecases'
import { AxiosHttpClient } from '../../../infra/http'
import { makeApiUrl } from '../http'

export const makeRemoteLoadCharacter = () => {
	return new RemoteLoadCharacters(makeApiUrl('/characters'), new AxiosHttpClient())
}
