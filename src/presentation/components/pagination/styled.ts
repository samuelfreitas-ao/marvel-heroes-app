import { styled } from 'styled-components/native'

export const Container = styled.View`
	margin: 8px;
	display: flex;
	flex-direction: row;
	gap: 8px;
`
export const List = styled.View`
	display: flex;
	flex-direction: row;
	gap: 12px;
	padding: 0;
`
export const Item = styled.View`
	display: flex;
	flex-direction: row;
	gap: 12px;
	padding: 0;
`
export const Button = styled.TouchableOpacity`
	/* background-color: ${(props) => (props.disabled ? '#eee' : 'white')}; */
	/* border: ${(props) => (props.disabled ? 'none' : '1px solid #ddd')}; */
	opacity: ${(props) => (props.disabled ? 0.4 : 1)};
	/* border-bottom: ${(props) => (props.disabled ? '2px solid #ddd' : 'none')}; */
	border: 1px solid #ccc;
	padding: 2px 8px;
	border-radius: 4px;
`
