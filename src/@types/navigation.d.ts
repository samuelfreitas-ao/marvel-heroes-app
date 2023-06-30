import { IScreen } from './screen'

export declare global {
	namespace ReactNavigation {
		interface RootParamList extends IScreen {
			name: string
			search: {
				query: string
			}
		}
	}
}