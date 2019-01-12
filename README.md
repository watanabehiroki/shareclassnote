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
        - pubnotelist => ノート一覧を表示する
        - detailnote => ノートの詳細情報
    - 授業計画表()
### api設計
- login時
    - /gethashkey => useridとhashkeyをデータベースに登録し、hashkeyを返す.
    - /confirmlogin => パスワードとidをもとにログインを問い合わせる。
        →　成功時：sessionidを返却する。
        →　失敗時：errorメッセージを返却する。
        
- client作成時
- その他
    - /getsubject => 登録されている科目を返却する. getで受け取る(session必要)
       responce json {
            result:false or true,
            red:     '',
            green:   '',
            blue:    '',
            subject: ''
        }
    - /newsubject => 新規の科目を登録する. postで受け取る
        request json{
            sessionid:''
            userid: '',
            subject: '',
            red:    '',
            green:  '',
            blue:   ''
        }
        responce json{
            result: false or true
            message:
        }
    - /rmaddsubject => 登録されている科目の修正と削除  postで受け取る
        request json{
            userid:     '',
            sessionid:  '',
            subject:     '',
            red:        '',
            green:      '',
            blue:       ''
        }
        responce json{
            result: false or true,
            message: '',
        }
    
    - gettime => 最大時間の取得
    - settime => 時間設定()
    - 
    
    
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
    
- 追加内容 rgb　各科目の色を自由に選択させるため
- <subjectcolor>テーブル =>教科ごとに色の選択をさせる.
    - subjectid<integer>    =>primarykey・outerjoin      
    - color<string>
    - startday<date>   => primary key
