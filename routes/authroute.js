const { router, Router } = require('express');
const Router1 = Router();
const authcontroller = require('../controllers/authControllers')

Router1.get('/signup', authcontroller.signup_get);
Router1.post('/signup', authcontroller.signup_post);
Router1.get('/login', authcontroller.login_get);
Router1.post('/login', authcontroller.login_post);

module.exports = Router1;