# Reactでめっちゃ簡単なTODOアプリを作る

## 環境構築

- [json server](https://github.com/typicode/json-server)
  
  1. `$ npm install json-server`でインストール
  2. json-serverをインストールしたディレクトリ直下に`db.json`を作成し、下記を記載。
    
      ```json
      {
      "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
      ],
      "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
      ],
      "profile": { "name": "typicode" }
      }
      ```
   3. package.jsonにserver起動用のコマンドを追加。下記は例。
      
      ```json
      "dev:serve": "vite & npx json-server --watch db.json"
      ```
    4. terminalで3で記載したnpm scriptを実行する。
