import { LoadCharactersMetadata } from '../../../domain/usecases'
import { paginate } from '../../../utils'
import { Loading } from '../loading'
import { Text } from '../text'
import { Button, Container, Item, List } from './styled'

type PaginationProps = {
	metaData: LoadCharactersMetadata
	onChangePage: (page: number) => void
	page: number
	isLoading?: boolean
}

export function Pagination({
	metaData,
	onChangePage: onSelect,
	page,
	isLoading
}: PaginationProps) {
	if (!metaData?.count || metaData?.count < 1) return <></>
	const { startPage, endPage, pageCount } = paginate(metaData)
	if (pageCount <= 1) return <></>

	const renderPages = () => {
		const pageButtons = []
		if (page > 1) {
			pageButtons.push(
				<Item key={-1}>
					<Button onPress={() => onSelect(0)} disabled={page === 0}>
						<Text text="1" />
					</Button>
					<Text text="..." />
				</Item>
			)
		}
		for (let offset = startPage; offset <= endPage; offset++) {
			pageButtons.push(
				<Item key={offset}>
					<Button
						key={offset}
						onPress={() => onSelect(offset)}
						disabled={offset === page}
					>
						<Text text={offset + 1} />
					</Button>
				</Item>
			)
		}
		if (pageCount - page > 2) {
			pageButtons.push(
				<Item key={pageCount}>
					<Text text="..." />
					<Button onPress={() => onSelect(pageCount - 1)} disabled={pageCount === page}>
						<Text text={pageCount} />
					</Button>
				</Item>
			)
		}
		return pageButtons
	}

	return (
		<Container>
			<List>{renderPages()}</List>
			{isLoading && <Loading />}
		</Container>
	)
}
