import React from "react";
import "./style.css";

function SelectDisplay(props) {
	let shake = props.array[0].shake === true ? "Shake" : "Don't Shake";

	return (
		<div id="selectionDisplay" className="container m-3">
			<div className="row">
				<div className="col">
					<div className="row my-4">{props.array[0].name}</div>
					<div className="row">
						<img
							id="selectionImage"
							width={300}
							height={300}
							className="m-3"
							src={props.array[0].image}
							alt="Generic placeholder"
						/>
					</div>
				</div>
				<div className="col">
					<div className="my-3" id="toShake">
						{shake}
					</div>
				</div>
			</div>

			
		</div>
	);
}

export default SelectDisplay;
