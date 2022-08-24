const express = require('express');

const router = express.Router();

const nftController = require('../controllers/nftController');

router.get('/nft', nftController.nftPage);

module.exports = router;
