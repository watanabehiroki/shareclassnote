# 教員管理者用アクセス権限
create table rolenumber(roleid varchar(20) not null primary key,rolenumber int not null,descriptor varchar(255),
delflg boolean not null);
# 管理者＆教員用テーブル
create table adminuser(email varchar(255) not null primary key, firstname varchar(255)not null, lastname varchar(255)not null, firstkananame varchar(255) not null,lastkananame varchar(255) not null,
 age int not null, deflg boolean not null,password varchar(255) not null,
 rolenumber varchar(20) not null , foreign key(rolenumber) references rolenumber(roleid));
# APIセッションテーブル(admin)
create table adminapisession(email varchar(255) ,endday date , sessionid varchar(255) not null, foreign  key(email) references adminuser(email),primary key(email));
#Refressionテーブル(admin)
create table adminrefression(email varchar(255) not null, endday date not null, refressionid varchar(255) not null,
 foreign key(email) references adminuser(email), primary key(email));

# 生徒テーブル
create table clientuser(userid varchar(255) primary key not null, firstname varchar(255)not null, lastname varchar(255)not null, firstkananame varchar(255) not null,lastkananame varchar(255) not null,
 profilepicture varchar(255),mailflg boolean,age int not null,delflg boolean not null,password varchar(20) not null);
# APIセッションテーブル(client)
create table clientapisession(userid varchar(255) ,endday date , sessionid varchar(255) not null,foreign key(userid) references clientuser(userid), primary key(userid));
#Refression テーブル(client)
create table clientrefression(userid varchar(255) not null, endday date not null, refressionid varchar(255) not null,
 foreign  key(userid) references clientuser(userid), primary  key(userid));

# グループ用テーブル
create table grouptable(groupname varchar(40),adminemail varchar(255),qcode varchar(255) not null,endday date not null,foreign key(adminemail) references adminuser(email),primary key(groupname,adminemail));
# １グループ内のメンバー
create table groupmember(adminemail varchar(255), groupname varchar(40), clientid varchar(255), delflg boolean, foreign key(adminemail)references adminuser(email),foreign key(groupname) references grouptable(groupname), foreign key(clientid) references clientuser(userid),
primary key(groupname,adminemail,clientid));
# 授業計画表
create table timetable(adminemail varchar(255) not null, groupname varchar(255) not null, clientid varchar(255) not null, jpegnumber varchar(255) not null, foreign key(adminemail) references adminuser(email), foreign key(groupname) references grouptable(groupname), foreign key(clientid) references clientuser(userid));
# 教科テーブル
create table subject(id int  not null primary key auto_increment,name varchar(40)not null, color varchar(255) not null, updateday date not null);
# 時間割テ―ブル
create table time(id int not  null primary key auto_increment, name varchar(40)not null);
# クラスノートテーブル
create table classnote(noteid varchar(255) primary key, clientid varchar(255) not null, releaseflg boolean not null, delflg boolean not null, groupname varchar(50) not null,lessonday date not null, updateday date not null , adminemail varchar(255) not null, timeid int, subject int,
 foreign key(clientid) references clientuser(userid), foreign key(groupname) references grouptable(groupname), foreign key(adminemail) references adminuser(email), foreign key(timeid) references time(id),
 foreign key(subject) references  subject(id));
# ファイルアップロードテーブル
create table uploadtable(noteid varchar(255), clientid varchar(255) not null, directorypath varchar(255),primary key(noteid,clientid), foreign  key(noteid) references classnote(noteid));
insert into rolenumber(roleid,rolenumber,descriptor,delflg) values ('sample',111,'initializing data',false);
insert into adminuser(email,firstname,lastname,firstkananame,lastkananame,age,deflg,password,rolenumber) values ('admin@admin.com','管理者','ユーザ','admin','user',100,false,'sharenotepassword','sample');
