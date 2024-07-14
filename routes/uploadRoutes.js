const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 25 * 1024 * 1024 }, // 25 MB limit
});

router.post('/upload', authMiddleware, upload.single('video'), uploadController.uploadVideo);

module.exports = router;
