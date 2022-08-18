// const express = require('express');

// const router = express.Router();

// const homepageRouter = require('./homePage');
// const signUpRouter = require('./sign_up');
// const loginRouter = require('./login');

// router.use(homepageRouter);
// router.use(signUpRouter);
// router.use(loginRouter);

// const userController = require('../controllers/userController');

// router.post('/login', userController.loginUser);

// module.exports = router;

const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

const homePageController = require('../controllers/homePageController');

router.get('/', homePageController.displayHomePage);
router.post('/login', userController.loginUser);

module.exports = router;
