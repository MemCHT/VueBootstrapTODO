# 使用方法
1. 本リポジトリをpull
2. 解凍後、ルートディレクトリでnpm install
3. [BootstrapVueドキュメント](https://bootstrap-vue.org/docs)

# 参考文献
## フロントエンド設計
- <a href="https://qiita.com/seya/items/8814e905693f00cdade2" target="_blank">フロントエンドコンポーネント設計</a>
- <a href="https://qiita.com/kahirokunn/items/f764302db290a504cc19" target="_blank">Fluxとは（状態管理デザインパターン）</a>
- <a href="https://qiita.com/d2cd-kimura/items/4aee84da42131f40b808" target="_blank">Vue.jsにおけるAtomicDesign（UIデザインパターン）</a>

- <a href="https://qiita.com/00092/items/52d641af8d37e2b07916" target="_blank">Vue.js採用例</a>

## フロントエンド実装
### Firebase
- <a href="https://console.firebase.google.com/u/0/project/todo-app-30380/overview?hl=ja">Firebaseコンソール</a>
- <a href="https://cr-vue.mio3io.com/tutorials/firebase.html#firebase-%E3%81%AE%E5%88%9D%E6%9C%9F%E5%8C%96">Vue.js+Firebasで認証付きチャット （「基礎から学ぶVue.js」チュートリアル）</a>

## git使用方法
- <a href="https://qiita.com/itosho/items/9565c6ad2ffc24c09364" target="_blank">Gitコミットメッセージの書き方</a>

## jQuery共存方法
- [Vue.jsでjQueryと共存させる方法](https://qiita.com/g-taguchi/items/15b2f5392f5556ac5a70)

## JSライブラリ開発
- [初めて本格的にJSライブラリを開発したとき](https://blog.natade.net/2019/07/28/javascript-es2015-es6-npm-%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E9%96%8B%E7%99%BA/)

# フォルダ構成
- src
  - api
  - assets
  - components
    - atoms
    - molcules
    - organisms
    - templates
  - router
    - index.js
  - store
    - index.js
  - views
  - App.vue
  - main.js
- ...その他MDBパッケージ


# 環境構築
1. vue-CLI導入 npm install -g @vue/cli
2. vueプロジェクト作成 vue create my-project
3. プロジェクトに移動して、vuexとvue-routerを導入 vue add vuex, vue add router

## 外部ライブラリ導入
1. Bootstrap(cssライブラリ)導入 
    - [Vue Cliを使いつつBootstrapVueを導入する方法](https://nekorokkekun.hatenablog.com/entry/2019/07/31/162227)

2. moments.js(js Date拡張ライブラリ)
    - https://qiita.com/Nossa/items/7fd83e3e7b8230058af3
    ```vue
      <!-- Foo.vue -->
      <script>
      import moment from 'moment';

      // Vue.filter('moment', function(val){return hoge}); のように、main.js等でグローバルに登録しても良い。
      export default {
        filters: {
          moment(value, format) {
            return moment(value).format(format);
          }
        }
      }
      </script>
    ```