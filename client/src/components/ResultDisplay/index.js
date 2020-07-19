import React from "react";
import { List, ListItem } from "../List";

function ResultDisplay({ array }) {
	let mapArray = array.data === undefined ? [] : array.data;

	return (
		<>
			<List title="Search Results">
				{mapArray.map((drink, i) => (
					<ListItem
						key={i}
						image={drink.image}
						shake={drink.shake}
						name={drink.name}
					></ListItem>
				))}
			</List>
		</>
	);
}

export default ResultDisplay;
