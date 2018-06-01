import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import morgan from 'morgan';

import passport from './passport';

import routes from './routes';
import models from '../models';

const app = express();

// load models to use
app.locals.models = models;

app.use(morgan('dev'));

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

var SequelizeStore = require('connect-session-sequelize')(session.Store);
var sessionStore = new SequelizeStore({
    db: models.sequelize
});
sessionStore.sync();
app.use(session({
    secret: 'Shhhhh!',
    store: sessionStore,
    saveUninitialized: false,
    resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'development') {
    app.use(require('./webpack-middleware'));
}

app.use(routes);


app.post('/product', function(req, res) {
	models.Product.create(req.body)
		.then(function(product) {
			res.format({
				html: function() {
					res.redirect('/products');
				},
				json: function() {
					res.json(product)
				}
			});
		});
});

app.get('/products', function(req, res) {
	models.Product.findAll()
		.then(function(products) {
			res.format({
				html: function() {
					res.send(products);
				},
				json: function() {
					res.json(products);
				}

			});
		})
		.catch(function(error) {
			console.log(error);
		})
});

app.get('/products/:product_id', function(req, res) {
	models.Product.findById()
		.then(function(product) {
			res.format({
				html: function() {
					res.send(products);
				},
				json: function() {
					res.json(products);
				}
			});
		});
});

app.delete('/products/:product_id', function(req, res) {
	const product_id = req.params.product_id;
	models.Product.findById(product_id)
		.then(function(trashProduct) {
			trashProduct.destroy()
				.then(function() {
				res.sendStatus(200);
		})
	});
		
});

app.put('/products/:product_id', function(req, res) {
	const product_id = req.params.product_id;
	models.Product.findById(product_id)
		.then(function(product) {
			console.log('this is the "product"' + product);
			console.log(req.body);
			product.update(req.body)
				.then(function() {
					res.json(product);
				})
				.catch(function(error) {
					res.status(500).send(error);
					console.log()
				}); 
			
			});
		});

export default app;