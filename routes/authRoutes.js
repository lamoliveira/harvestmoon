const User = require("../models").User;
module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

	router.get("/isAuthenticated",function(req,res){
		if (req.isAuthenticated()){
			res.json({
				userId: req.user._id,
				username: req.user.username,
				isAuthenticated: true,
				nickname: req.user.nickname,
				address: req.user.address,
				description: req.user.description,
				image: req.user.image
			});
			//you can also pass up any other fields you with to expose
			//for example, 
			//nickname: req.user.nickname
		} else {
			res.json({
				userId: null,
				username: null,
				isAuthenticated: false
			});
		}
	});

	router.post("/signup",function(req,res){
		const newUser = req.body;
		User.register(newUser,newUser.password,(err,user)=>{
			if (err){ return res.json(err.message); }
			res.json({
				userId: req.user._id,
				username: req.user.username,
				isAuthenticated: true,
				nickname: req.user.nickname,
				address: req.user.address,
				description: req.user.description,
				image: req.user.image
			});
		});
	});

	router.post("/signin",passport.authenticate('local') ,function(req,res){
		 console.log(req.user);
		 console.log(res);
		res.json({
			userId: req.user._id,
			username: req.user.username,
			isAuthenticated: true,
			nickname: req.user.nickname,
			address: req.user.address,
			description: req.user.description,
			image: req.user.image
		});
	});

	router.get('/logout', function(req, res) {
		req.logout();
		res.json();
	});

	return router;
};