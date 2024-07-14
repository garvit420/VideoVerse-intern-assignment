const { Video } = require('../db/models/videoModel');
const ffmpegUtils = require('../utils/ffmpegUtils');
const fs = require('fs');
const config = require('../config/config');

const uploadVideo = async (file) => {
  const { path, size, filename } = file;
  
  // Validate file size
  if (size > config.upload.maxSize) {
    fs.unlinkSync(file);
    throw new Error(`File size exceeds the maximum limit of ${config.upload.maxSize / (1024 * 1024)} MB`);
  }
  
  // Get video duration
  const duration = await ffmpegUtils.getVideoDuration(path);
  
  // Validate video duration
  if (duration < config.upload.minDuration || duration > config.upload.maxDuration) {
    fs.unlinkSync(path);
    throw new Error(`Video duration must be between ${config.upload.minDuration} and ${config.upload.maxDuration} seconds`);
  }
  
  // Save video information to the database
  const video = await Video.create({
    filename,
    size,
    duration,
    path
  });

  return video;
};

module.exports = {
  uploadVideo,
};
