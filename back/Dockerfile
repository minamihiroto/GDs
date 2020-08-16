# ベースイメージの作成
FROM node:12.18.2
# コンテナ内で作業するディレクトリを指定
WORKDIR /usr/src
# package.jsonとyarn.lockを/usr/src/にコピー
COPY ["package.json", "yarn.lock", "./"]
# パッケージをインストール
RUN yarn install
# ファイルを全部作業用ディレクトリにコピー
COPY . .
