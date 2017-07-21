# coeic-fe
coεicのフロントエンドのコード。本番環境は下記。

https://coeic.herokuapp.com/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# serve in production mode
npm run start

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## POST APIを試せるコマンド
``` bash
# 画像アップロード
curl -w '\n' 'http://localhost:8080/api/uploaded-img' -XPOST
```

## DB migration

* 予め、 `npm i -g sequelize-cli` を実行してCLIをインストールおくこと。

``` bash
# 新たに「hoge」という名前のモデルを作成。fuga_1, fuga_2というカラムを持つ。
sequelize model:create --name hoge --underscored --attributes fuga_1:string,fuga_2:boolean
# マイグレーション（環境構築時や、定義変更時は実行すること！）
sequelize db:migrate --env development|production
```

* テーブル定義を変更する時
  * migrationファイルを作成するのかな？（試してない）
  * 場合によっては `sequelize model:create` をやり直した方が早い？
    * その場合は `--force` optionを付与する。
    ``` bash
    sequelize model:create --force --name hoge --underscored --attributes fuga_1:string,fuga_2:boolean
    ```

## herokuへのdeploy
* 下記コマンドでmasterブランチのコードをデプロイできる。
* 川原以外が実施する時はherokuのアクセス権限を付与すればよい？
```
git push heroku master
```
* 都合上、本来devDependenciesのパッケージもdependenciesとしている。
  * herokuのコンテナ上でビルドが実施されるため。
  * https://github.com/peinan/coeic-fe/wiki

## 認証方法の変更
``` bash
# IP認証（社内アクセスのみ許可する場合）
heroku config:set AUTH=IP
# BASIC認証
heroku config:set AUTH=BASIC
```
