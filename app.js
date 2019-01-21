require('dotenv').config();

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./util/database');

app.set('view engine', 'pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const blogRoutes = require('./routes/blog');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes, () => {
	app.use(express.static(path.join(__dirname, 'views/admin/build')));
});


db.promise().execute('SELECT * FROM slides').then( resp => {
	console.log(resp);
}).catch( error => {
	console.log(error);
});

app.use(blogRoutes);

const port = +process.env.PORT;

app.listen(port, () => console.log(`http://localhost:${port}`));
