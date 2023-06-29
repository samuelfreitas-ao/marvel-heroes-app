import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'

type SpinnerProps = ActivityIndicatorProps

export function Spinner(props: SpinnerProps) {
	return <ActivityIndicator {...props} />
}
