# shareclassnote
- angularとexpressを利用して開発を行う
### ディレクトリ構造
- shareclassnote
  - admin(angular)
  - client(angular)
  - appapi(express json)

### api設計
- login時
    - /gethashkey => useridとhashkeyをデータベースに登録し、hashkeyを返す.
    
- client作成時

### データベース構造
- <adminuser>テーブル => 教員＆管理者
    - userid<string>        => primary
    - name<string>
    - age<integer>
    - delflg<boolean>
    - password<string>->hash
    - rolenumber<string>    => outerjoin
    - mail<string>
- <clientuser>テーブル => 生徒側
    - userid<string>        => primary
    - name<string>
    - profilepicture<string>
    - mailflg<boolean>
    - age<integer>
    - delflg<boolean>
    - password<string>
- <apisession>テーブル => api セッション時に使用する
    - userid<string>        => outerjoin
    - sessionid<string>
    - endday<date>
- <grouptable>テーブル => qrcode生成に使用
    - groupname<string>     => primary
    - adminid<string>       => outerjoin
    - qrcode<string>
    - endday<date>
- <groupmember>テーブル => グループ作成
    - adminid<string>       => outerjoin
    - groupname<string>     =>outerjoin
    - clientid<string>      => outerjoin
- <classnote>テーブル => ノート共有機能
    - noteid<string>        => primary
    - clientid<string>      => outerjoin
    - releaseflg<boolean>
    - groupname<string>     => outerjoin
    - adminid<string>       => outerjoin
- <timetable>テーブル =>　授業予定表
    - adminid<string>       => outerjoin
    - groupname<string>     => outerjoin
    - clientid<string>      => outerjoin
    - jpegnumber<string>
- <rolenumber>テーブル => 教員＆管理者側のアクセス権限
    - roleid<string>        => primary
    - rolenumber<intger>
    - descriptor<string> => 記述事項など
    - delflg<boolean>