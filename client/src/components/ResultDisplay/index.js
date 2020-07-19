import React from "react";
import { List, ListItem } from "../List";

function ResultDisplay({ array }) {
	return (
		<>
			<List title="Search Results">
				{array.map((drink, i) => (
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
