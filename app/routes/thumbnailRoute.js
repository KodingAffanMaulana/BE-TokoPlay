const express = require('express');
const thumbnailController = require('../controllers/thumbnailController');

const router = express.Router();

router.get('/', thumbnailController.getThumbnail);
router.get('/video', thumbnailController.getThumbnaiById);
router.post('/', thumbnailController.createThumbnail);

module.exports = router;