const uploadService = require('../services/uploadService');

const uploadVideo = async (req, res, next) => {
  try {
    const video = await uploadService.uploadVideo(req.file);
    res.status(201).json(video);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  uploadVideo,
};
