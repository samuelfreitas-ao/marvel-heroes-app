import { Image, Url } from '../../@types'
import { Serie } from './serie'

export interface Character {
	id: number
	name: string
	description: string
	modified: Date
	resourceURI: string
	urls: Url[]
	thumbnail: Image
	series: Serie[]
}
