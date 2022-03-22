const multer = require('multer');
const path = require('path');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

// AWS.config.update({
//   accessKeyId: process.env.S3_ACCESS_KEY_ID,
//   secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//   region: 'ap-northeast-2',
// });
const S3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});
exports.upload = multer({
  storage: multerS3({
    s3: S3,
    bucket: 'welcome-omakase-image',
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, //20MB
});

exports.deleteImage = async (req, res) => {
  try {
    const option = {
      Bucket: 'welcome-omakase-image',
      Key: `original/${req.params.image}`,
    };
    const result = S3.deleteObject(option, (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log(data);
      }
    });

    res.status(201).json(req.params.image);
  } catch (err) {
    console.log(err);
    res.status(403).send('이미지 삭제 실패');
  }
};
// exports.upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, 'uploads');
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname); //확장자 추출
//       const basename = path.basename(file.originalname, ext);
//       done(null, basename + '_' + new Date().getTime() + ext);
//     },
//   }),
//   limits: { fileSize: 20 * 1024 * 1024 }, //20MB
// });
