const express = require('express');
const mongoose = require('mongoose');
const authroutes = require('./routes/authroute');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
// view engine
app.set('view engine', 'ejs');

//database connection 
const dbURI = 'mongodb+srv://chedlyklaa:test123@cluster0.9rzyazv.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// routes
app.listen(3000, () => {
    console.log("listening on port 3000")
})
app.get('/', (req, res) => res.render("home"));
app.get('/smoothies', (req, res) => res.render('smoothies.ejs'));
app.use(authroutes);