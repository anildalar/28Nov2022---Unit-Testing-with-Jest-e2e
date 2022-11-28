const express = require('express');
const { homeController,homeController2 } = require('../controllers/homeController');


const homeRoute = express.Router();

homeRoute.get('/',homeController);
homeRoute.post('/todo',homeController2);



module.exports = homeRoute;
