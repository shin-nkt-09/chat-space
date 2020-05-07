## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false,unique: true|
|password|string|null: false|
|name|string|null: false|

### Association
- has_many :message
- has_many :group
- has_many :group, through: :group_user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|text||
|body|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group


### groupテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|

- has_many :message
- has_many :user
- has_many :user, through: :user


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user