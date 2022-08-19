const express = require('express');

const router = express.Router();

const homePageController = require('../controllers/homePageController');

/* Route to Home page */
router.route('/').get(homePageController.displayHomePage);

module.exports = router;