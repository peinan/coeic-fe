# coeic-fe
フロントエンドのコード。

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

## POST API
``` bash
# 画像アップロード
curl -w '\n' 'http://localhost:8080/api/uploaded-img' --data "is_oneframe=false" -XPOST
```

## DB migration

予め、`npm i -g sequelize-cli`を実行してCLIをインストールおくこと。
また、プロジェクトのルートで`sequelize init`を実施済みであること。

``` bash
# 新たに「hoge」という名前のモデルを作成。fuga_1, fuga_2というカラムを持つ。
sequelize model:create --name hoge --underscored --attributes fuga_1:string,fuga_2:boolean
# マイグレーション（定義を変更したら実行すること！）
sequelize db:migrate --env development|production
```

テーブル定義を変更する時は、migrationファイルを作成するのかな？（試してない）
