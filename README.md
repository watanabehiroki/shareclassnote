# shareclassnote
- angularとexpressを利用して開発を行う
### ディレクトリ構造
- shareclassnote
  - admin(angular)
  - client(angular)
  - appapi(express json)

### client画面遷移
- componentで表示する
    - noteディレクトリ
        - selectnoteoperation => ノートの提出かノート閲覧を選択させる
        - submitnote => ノートのアップロードを行う
        - selectsubject => 教科の選択を行う
        - detailnote => ノート一覧を表示する
        - readingnote => ノートの詳細情報
    - 授業計画表()
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
    - timeid<integer>       => outerjoin
    - subject<integer>      => outerjoin
- <timetable>テーブル =>　授業予定表
    - adminid<string>       => outerjoin
    - groupname<string>     => outerjoin
    - clientid<string>      => outerjoin
    - jpegnumber<string>
- <rolenumber>テーブル => 教員＆管理者側のアクセス権限
    - roleid<string>        => primary key
    - rolenumber<intger>
    - descriptor<string> => 記述事項など
    - delflg<boolean>
- <time>テーブル => 時間割をしていする
    - id<integer>           =>primary key
    - name<string>時間割・その他
- <subject> テーブル => 教科をしていする
    - id<integer>           =>primary key
    - name<string>教科名