module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

	//add any API routes here
	const productsController = require("../controllers/productsController");


	// Matches with "/api/products"
	router.route("/products")
		.get(productsController.findAll)
		.post(productsController.create);

	// Matches with "/api/products/userid"
	router.route("/products/userid/:userid")
		.get(productsController.findAllbyuserid)
		.post(productsController.create);

	// Matches with "/api/products/:id"
	router
		.route("/products/:id")
		.get(productsController.findById)
		.put(productsController.update)
		.delete(productsController.remove);

	const usersController = require("../controllers/usersController");

	// Matches with "/api/users"
	router.route("/users")
		.get(usersController.findAll)
		.put(usersController.update)
		.post(usersController.create);

	// Matches with "/api/users/:id"
	router
		.route("/users/:id")
		.get(usersController.findById)
		.delete(usersController.remove);
	return router;
};

