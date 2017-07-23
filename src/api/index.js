const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const multer = require('multer');
const models = require('../../models');

const router = express.Router();
const upload = multer();

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
 * GCP側のAPIを叩く（クロスドメイン対策）
 */
router.all('/', upload.single('file'), (req, res) => {
  const query = req.query;

  request({
    method: req.method,
    uri: `http://104.155.222.216:5000${query.path}`,
    qs: query,
    form: req.file,
  }, (error, response, resBody) => {
    res.send(resBody);
  });
});

/**
 * アップロードされた画像を1件取得。
 */
router.get('/uploaded-img/:id', (req, res) => {
  models.uploaded_img.findById(req.params.id)
  .then(uploadedImg => res.send({ result: uploadedImg }));
});

/**
 * アップロードされた画像を全件取得。
 */
router.get('/uploaded-img', (req, res) => {
  models.uploaded_img.findAll().then(uploadedImg => res.send({ result: uploadedImg }));
});

/**
 * 画像の登録。
 */
router.post('/uploaded-img', (req, res) => {
  // ファイル名を生成（ランダムな16文字の文字列）
  const c = 'abcdefghijklmnopqrstuvwxyz0123456789'; // 生成する文字列に含める文字セット
  const cl = c.length;
  let filename = '';
  for (let i = 0; i < 16; i += 1) {
    filename += c[Math.floor(Math.random() * cl)];
  }
  filename += '.jpg';

  // TODO 既に存在するファイル名の場合は生成し直し

  models.uploaded_img.findOrCreate({
    where: { filename },
    defaults: { status: 'todo' },
  })
  .spread((uploadedImg) => {
    res.send(uploadedImg.get({ plain: true }));
  });
});

/**
 * 画像の更新
 */
router.put('/uploaded-img/:id', (req, res) => {
  models.uploaded_img.update({ status: 'done' }, {
    where: { id: req.params.id },
  })
  .then((result) => {
    console.log(result);
    res.send(result);
  });
});

/**
 * 処理済画像を取得。（モック）
 */
router.get('/processed-img/:id', (req, res) => {
  res.send({
    result: {
      aaa: 'bbb',
    },
  });
});

module.exports = router;
