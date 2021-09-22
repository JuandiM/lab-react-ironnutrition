import { Divider, Input } from 'antd';

function SearchFood({ searchInput, searchFoodFilter }) {
	return (
		<div className="Search">
			<Divider>
				<h1>Search food</h1>
			</Divider>
			<Input type="text" placeholder="Enter search query" value={searchInput} onChange={(e) => searchFoodFilter(e)} />
		</div>
	);
}
export default SearchFood;