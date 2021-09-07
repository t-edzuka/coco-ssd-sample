# Tensorflow．js 物体検出サンプルコード. Reactを使って実装した例


[このレポジトリ](https://github.com/wmkinyan/RealTimeObjectDetectionTFJSReact)をクローンしていじってみた.


## ローカル (macOS)の Node.js環境構築方法

## Install anyenv

```zsh
brew install anyenv
echo 'eval "$(anyenv init -)"' >> ~/.zshrc $ exec $SHELL -l
anyenv install nodenv
exec $SHELL -l
```

## Install plugins: `anyenv-update`, `nodenv-default-packages`

- anyenv-update: nodenv を含めた*envを自動アップデートしてくれるプラグイン
- nodenv-default-packages npm でインストールしたときにデフォルトで一緒にインストールするパッケージを指定できるプラグイン

```zsh
mkdir -p $(anyenv root)/plugins
git clone https://github.com/znz/anyenv-update.git $(anyenv root)/plugins/anyenv-update
mkdir -p "$(nodenv root)"/plugins
git clone https://github.com/nodenv/nodenv-default-packages.git "$(nodenv root)/plugins/nodenv-default-packages"
touch $(nodenv root)/default-packages
```

`(nodenv root)/default-packages`ファイルの中身は

```default-packages
yarn
typescript
ts-node
typesync
```

を書き込みして保存する.

## Install Node.js

2021-08-22 最新のものをインストール

```zsh
nodenv install -l # インストールできるversion一覧を表示
nodenv install 16.6.2 # version指定してインストール
nodenv global 16.6.2 # global 環境に適用
```

## 新規のReact プロジェクトを生成する場合はCreate React APP

```zsh
npx create-react-app my-project --template=typescript
```

## レポジトリからクローンしたサンプルでプロジェクトをスタートする場合

プロジェクトフォルダ直下で
必要なnode_modulesをインストールする. 400 MB以上の重いファイルになるので注意.

```zsh
yarn
```

[環境設定参考: りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅰ. 言語・環境編】](https://booth.pm/ja/items/2368045)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

### `yarn build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>