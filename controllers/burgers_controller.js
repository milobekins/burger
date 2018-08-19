var express = require("express");
var burger = require("../models/burger");


module.exports = function(app) {
    app.get("/", function(req, res) {
        burger.selectAll(function(data) {
            var burgersData = {
                burgers: data,
            }
            res.render("index", burgersData);  
        });
    });
        
    app.post("/addBurger", function(req, res) {
        console.log(req.body)
        burger.insertOne(req.body.burgerName, function(data) {
            console.log("Added to DB")
        });
    })
    app.post("/devourBurger", function(req, res) {
        burger.updateOne(req.body.id, function(data) {
            console.log("Added to DB")
        });
    })
}