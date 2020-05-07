## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false,unique: true|
|password|string|null: false|
|name|string|null: false,index: true|

### Association
- has_many :messages
- has_many :groups
- has_many :groups, through: :group_users


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


### groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

- has_many :messages
- has_many :users
- has_many :users, through: :group_users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user