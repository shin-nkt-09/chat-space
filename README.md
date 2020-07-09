## アプリケーション情報
### アプリケーション概要
- ChatSpace(チャットアプリ)
- 接続先情報
- URL：http://18.180.77.181/

### BASIC認証パスワード
- ID:admin
- PASS:2222
### 確認用アカウント
- メールアドレス: test@test
- パスワード:testtest
### 確認用アカウント2
- メールアドレス: test2@test
- パスワード: testtest

## 実装機能
- ユーザ新規登録
- ログイン/ログアウト
- テキスト及び画像投稿（非同期通信）
- グループ機能・編集・削除

## 開発状況
## 開発環境
- Ruby/Ruby on Rails/JavaScript/haml/scss/MySQL/Github/Visual Studio Code/AWS
### 開発期間と平均作業時間
- 開発期間：2週間
- 1日あたりの平均作業時間：約8時間
### 開発体制
- 人数：1名


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false,unique: true|
|password|string|null: false|
|name|string|null: false,index: true|

### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|text||
|body|text||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group


### groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

- has_many :messages
- has_many :groups_users
- has_many :users, through: :groups_users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user