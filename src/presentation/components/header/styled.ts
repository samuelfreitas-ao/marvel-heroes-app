import { Dimensions, StatusBar } from 'react-native'
import { styled } from 'styled-components/native'
import { THEME } from '../../styles'

const { width: screenWidth } = Dimensions.get('screen')

export const Container = styled.ImageBackground`
	display: flex;
	justify-content: center;
	width: ${screenWidth}px;
	min-height: 192px;
	padding: 24px 8px;
	padding-top: ${StatusBar.currentHeight || 0}px;
	/* padding-bottom: 64px; */
`
export const Content = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`
export const MenuButton = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	margin-left: auto;
	background: ${THEME.colors.green[500]};
	border: 1px solid ${THEME.colors.gray[400]};
	border-radius: 4px;
`
