import React from "react";
import "./style.css";

function SelectDisplay(props) {
	let shake = props.array[0].shake === true ? "Shake" : "Don't Shake";

	return (
		<div id="selectionDisplay" className="container m-3">
			<div className="row">
				{props.array[0].name}
				<br />
				{shake}
			</div>
			<div className="row">
				<div className="col-5">
					<img
						id="selectionImage"
						width="100%"
						src={require(`../../images/beverages/images.jpeg`)}
						alt={props.array[0].name}
					/>
				</div>
				<div className="col-5" style={{ border: "solid" }}>
					<div className="row">
						<div className="col-12" style={{ paddingLeft: 0 }}>
							Nutrition Facts
						</div>
					</div>
					<div className="row">
						<div className="col-12" style={{ paddingLeft: 0 }}>
							Serving Size:
						</div>
					</div>
					<div className="row">
						<div className="col-12" style={{ paddingLeft: 0 }}>
							Calories
						</div>
					</div>
					<div className="row">
						<div className="col-12 text-right" style={{ paddingRight: 0}}>% Daily Value</div>
					</div>
					<div className="row">
						<div className="col-6" style={{ paddingLeft: 0 }}>
							Sodium
						</div>
						<div className="col-6"></div>
					</div>
					<div className="row">
						<div className="col-6" style={{ paddingLeft: 0 }}>
							Total Carbohydrate
						</div>
						<div className="col-6"></div>
					</div>
					<div className="row">
						<div className="col-12" style={{ paddingLeft: "8px" }}>
							Sugars
						</div>
					</div>
					<div className="row">
						<div className="col-6" style={{ paddingLeft: 0 }}>
							Protein
						</div>
						<div className="col-6"></div>
					</div>
					<div className="row">
						<div className="col-12">
							*Percent Daily Values are based on a 2,000 calorie diet.
						</div>
					</div>
				</div>
				<div className="col-2"></div>
			</div>
		</div>
	);
}

export default SelectDisplay;
