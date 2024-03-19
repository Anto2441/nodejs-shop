const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  //Render html file
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  const products = adminData.products;
  //Render pug file
  res.render('shop', { prods: products, docTitle: 'Shop', path: '/' });
});

module.exports = router;
