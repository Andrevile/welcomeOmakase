const fs = require('fs');

exports.makeUploadsDir = () => {
  try {
    fs.accessSync('uploads');
  } catch (err) {
    console.log('uploads 폴더 생성');
    fs.mkdirSync('uploads');
  }
};
