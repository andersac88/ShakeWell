import React from "react";
import "./style.css";

function SelectDisplay({ selection }) {
	const shake = selection.shake === true ? "Shake" : "Don't Shake";
	const image = selection.image === undefined ? "download" : selection.image;

	return (
		<div id="selectionDisplay" className="container m-3">
			<div className="row pb-">
				<div className="col-6 beverageName">{selection.name}</div>
				<div className="col-6 toShake">{shake}</div>
			</div>
			<div className="row pb-3 px-1">
				<div className="col-6 selectionImage">
					<img
						className="mx-auto"
						id="selectionImage"
						width="100%"
						
						src={require(`../../images/beverages/${image}.jpeg`)}
						alt={selection.name}
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
								<br />
								{selection.servingSize ? (
									selection.servingSize
								) : (
									<span>&nbsp;</span>
								)}
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
								<span id="input">{selection.calories}</span>
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
								<span id="input"> {selection.fat}</span>
							</div>
							<div className="a col px-0 thinLine text-right">
								<strong>{selection.fatp}</strong>
							</div>
						</div>
						<div className="row">
							<div className="a col-9 px-0 thinLine">
								<strong>Sodium </strong>
								<span id="input">{selection.sodium}</span>
							</div>
							<div className="a col px-0 thinLine text-right">
								<strong>{selection.sodiump}</strong>
							</div>
						</div>
						<div className="row">
							<div className="a col-10 px-0 thinLine">
								<strong>Total Carbohydrate</strong>
								<span id="input">{selection.carb}</span>
							</div>
							<div className="col a px-0 thinLine text-right">
								<strong>{selection.carbsp}</strong>
							</div>
						</div>
						<div className="row">
							<div className="thinLine a col-12 ml-2">
								Sugars<span id="input">{selection.sugar}</span>
							</div>
						</div>
						<div className="row">
							<div className="col-12 a px-0 thinLine">
								<strong>Protein</strong>
								<span id="input">{selection.protein}</span>
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
