const express = require('express');

const router = express.Router();
const models = require('../../models');
const bodyParser = require('body-parser');

// POSTパラメータをJSONで取得する設定
router.use(bodyParser.urlencoded({
  extended: true,
}));
router.use(bodyParser.json());

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

/**
 * アップロードされた画像を全件取得。
 */
router.get('/uploaded-img', (req, res) => {
  models.uploaded_img.findAll().then(uploadedImg => res.send(uploadedImg));
});

/**
 * 画像の登録。
 */
router.post('/uploaded-img', (req, res) => {
  // ファイル名を生成（ランダムな16文字の文字列）
  const c = 'abcdefghijklmnopqrstuvwxyz0123456789'; // 生成する文字列に含める文字セット
  const cl = c.length;
  let filename = '';
  for (let i = 0; i < 16; i++) {
    filename += c[Math.floor(Math.random() * cl)];
  }
  filename += '.jpg';

  // TODO 既に存在するファイル名の場合は生成し直し

  models.uploaded_img.findOrCreate({
    where: { 'filename': filename },
    defaults: { 'status': 'todo' }
  })
  .spread((uploadedImg, created) => {
    res.send(uploadedImg.get({plain: true }));
  });
});

module.exports = router;
