import React from "react";
import "./style.css";

function SelectDisplay(props) {
	let shake = props.array[0].shake === true ? "Shake" : "Don't Shake";

	return (
		<div id="selectionDisplay" className="container m-3">
			<div className="row pb-">
				<div className="col-6 beverageName">{props.array[0].name}</div>
				<div className="col-6 toShake">{shake}</div>
			</div>
			<div className="row pb-3 px-1">
				<div className="col-6">
					<img
						id="selectionImage"
						width="100%"
						src={require(`../../images/beverages/images.jpeg`)}
						alt={props.array[0].name}
					/>
				</div>
				<div
					className="col-6"
					style={{ border: "solid", marginBottom: "auto" }}
				>
					<div className="col px-1">
						<div className="row">
							<div className="col-12 px-0 facts">Nutrition Facts</div>
						</div>
						<div className="row">
							<div className="a col-12 px-0">
								Serving Size:
								<br />1 Bottle
							</div>
						</div>
						<div className="row">
							<div className="col-12 amountValue px-0 boldLine">
								Amount per Serving
							</div>
						</div>
						<div className="row">
							<div className="a col-12  px-0 thinLine">
								<strong>Calories</strong>
								<span id="input">160</span>
							</div>
						</div>
						<div className="row">
							<div className="col-12 px-0 text-right amountValue boldLine">
								% Daily Value**
							</div>
						</div>
						<div className="row">
							<div className="col-9 a px-0 thinLine">
								<strong>Total Fat </strong>
								<span id="input"> 0g</span>
							</div>
							<div className="a col px-0 thinLine text-right">
								<strong>0%</strong>
							</div>
						</div>
						<div className="row">
							<div className="a col-9 px-0 thinLine">
								<strong>Sodium </strong>
								<span id="input">35mg</span>
							</div>
							<div className="a col px-0 thinLine text-right">
								<strong>1%</strong>
							</div>
						</div>
						<div className="row">
							<div className="a col-10 px-0 thinLine">
								<strong>Total Carbohydrate</strong>
								<span id="input">39g</span>
							</div>
							<div className="col a px-0 thinLine text-right">
								<strong>13%</strong>
							</div>
						</div>
						<div className="row">
							<div className="thinLine a col-12 ml-2">
								Sugars<span id="input">38g</span>
							</div>
						</div>
						<div className="row">
							<div className="col-12 a px-0 thinLine">
								<strong>Protein</strong>
								<span id="input">0g</span>
							</div>
						</div>
						<div className="row">
							<div className="col-12 px-0 boldLine pdv">
								**Percent Daily Values are based on a 2,000 calorie diet.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SelectDisplay;
