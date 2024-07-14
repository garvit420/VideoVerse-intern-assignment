const express = require('express');
const router = express.Router();

// const authRoutes = require('./authRoutes');
const uploadRoutes = require('./uploadRoutes');
// const trimRoutes = require('./trimRoutes');
// const mergeRoutes = require('./mergeRoutes');
// const shareRoutes = require('./shareRoutes');

// router.use('/auth', authRoutes);
router.use('/videos', uploadRoutes);
// router.use('/trim', trimRoutes);
// router.use('/merge', mergeRoutes);
// router.use('/share', shareRoutes);

module.exports = router;
