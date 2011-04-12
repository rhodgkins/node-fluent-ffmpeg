var ffmpeg = require('../lib/fluent-ffmpeg');

var proc = new ffmpeg('/path/to/your_movie.avi')
  // set the size of your thumbnails
  .withSize('150x100')
  // take 5 thumbnails evenly distributed across the movie
  .takeScreenshots(5, '/path/to/thumbnail/folder', function(err) {
    console.log('screenshots were saved')
  });