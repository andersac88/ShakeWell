import React from "react";
import { List, ListItem } from "../List";

function ResultDisplay({ array, onSelect }) {
	let mapArray = array.data === undefined ? [] : array.data;
	if (mapArray.length > 0) {

	console.log(array.data[0])
		let reducedArray = mapArray.slice(0, 5);
		return (
			<>
				<List title="Search Results">
					{reducedArray.map((drink, i) => (
						<ListItem
							key={i}
							image={drink.image}
							shake={drink.shake}
							name={drink.name}
							onSelect={onSelect}
						></ListItem>
					))}
				</List>
			</>
		);
	} else {
		return (
			<List title="Search Results">
				{mapArray.map((drink, i) => (
					<ListItem
						key={i}
						image={drink.image}
						shake={drink.shake}
						name={drink.name}
						onSelect={onSelect}
					></ListItem>
				))}
			</List>
		);
	}
}

export default ResultDisplay;
