const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Beverages collection and inserts the beverages below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Shakewell");

const beverageSeed = [
	{
		name: "Coca-Cola",
		image: `Coca-Cola`,
        shake: false,
        servingSize: "12 fl oz",
        calories: 140,
        fat: "0g",
        fatp: "0%",
        sodium: "45mg", 
        sodiump: "2%",
        carb: "39g",
        carbsp: "14%",
        sugar: "39g",
        protein: "0g",
    }, {
		name: "Minute Maid Orange Juice",
		image: `Minutes-Maid-OJ`,
        shake: true,
        servingSize: "10 fl oz",
        calories: 140,
        fat: "0g",
        fatp: "0%",
        sodium: "20mg", 
        sodiump: "1%",
        carb: "33g",
        carbsp: "12%",
        sugar: "30g",
        protein: "2g",
	}, {
		name: "Arizona Green Tea",
		image: `Arizona-Green-Tea`,
        shake: true,
        servingSize: "16.9 fl oz",
        calories: 130,
        fat: "0g",
        fatp: "0%",
        sodium: "0mg", 
        sodiump: "0%",
        carb: "35g",
        carbsp: "13%",
        sugar: "34g",
        protein: "0g",
	}, {
		name: "Orangina",
		image: `Orangina`,
        shake: false,
        servingSize: "8 fl oz",
        calories: 110,
        fat: "0g",
        fatp: "0%",
        sodium: "25mg", 
        sodiump: "1%",
        carb: "26g",
        carbsp: "9%",
        sugar: "25g",
        protein: "0g",
	}, {
		name: "Red Bull",
		image: `Red-Bull`,
        shake: false,
        servingSize: "8 fl oz",
        calories: 110,
        fat: "0g",
        fatp: "0%",
        sodium: "100mg", 
        sodiump: "4%",
        carb: "28g",
        carbsp: "9%",
        sugar: "26g",
        protein: "less than 1g",
	}, {
		name: "Mr. Pibb Xtra",
		image: `Mr-Pibb`,
        shake: false,
        servingSize: "12 fl oz",
        calories: 140,
        fat: "0g",
        fatp: "0%",
        sodium: "40mg", 
        sodiump: "2%",
        carb: "39g",
        carbsp: "13%",
        sugar: "39g",
        protein: "0g",
	},  {
		name: "Vita Coconut Water",
		image: `Vita-Coconut-Water`,
        shake: true,
        servingSize: "8 fl oz",
        calories: 45,
        fat: "0g",
        fatp: "0%",
        sodium: "55mg", 
        sodiump: "2%",
        carb: "11g",
        carbsp: "4%",
        sugar: "11g",
        protein: "0g",
	},  {
		name: "Kimura Ramune Original Soda",
		image: `Kimura-Ramune`,
        shake: false,
        servingSize: "1 bottle",
        calories: 88,
        fat: "0g",
        fatp: "0%",
        sodium: "20mg", 
        sodiump: "0%",
        carb: "21g",
        carbsp: "7%",
        sugar: "18g",
        protein: "0g",
	},  {
		name: "Yoo-Hoo Chocolate Drink",
		image: `yoohoo`,
        shake: true,
        servingSize: "16 oz",
        calories: 230,
        fat: "2g",
        fatp: "3%",
        sodium: "340mg", 
        sodiump: "14%",
        carb: "51g",
        carbsp: "17%",
        sugar: "45g",
        protein: "3g",
	}
    
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
