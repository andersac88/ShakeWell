const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Beverages collection and inserts the beverages below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Shakewell");

const beverageSeed = [
	{
		name: "Coca-Cola",
		image: "images",
		shake: false,
	},
	{
		name: "Sprite",
		image: "images",
		shake: false,
	},
	{
		name: "Water",
		image: "images",
		shake: false,
	},
	{
		name: "Milk",
		image: "images",
		shake: false,
	},
	{
		name: "Ice Tea",
		image: "images",
		shake: true,
	},
	{
		name: "Orange Juice",
		image: "images",
		shake: true,
	},
	{
		name: "Coffee",
		image: "images",
		shake: false,
	},
	{
		name: "Gatorade",
		image: "images",
		shake: false,
	},
	{
		name: "Dr. Pepper",
		image: "images",
		shake: false,
	},
];

db.Beverage.deleteMany({})
	.then(() => db.Beverage.collection.insertMany(beverageSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
