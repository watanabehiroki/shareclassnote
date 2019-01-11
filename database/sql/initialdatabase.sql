# 管理者＆教員用テーブル
create table adminuser(userid varchar(255) not null primary key,name varchar(255) not null, age int not null,
deflg boolean not null,password varchar(255) not null,rolenumber varchar(20) not null ,mail varchar(255) not null, foreign key(rolenumber) references rolenumber(roleid));
# 教員管理者用アクセス権限
create table rolenumber(roleid varchar(20) not null primary key,rolenumber int not null,descriptor varchar(255),
delflg boolean not null);
# 生徒テーブル
create table clientuser(userid varchar(255) primary key not null,name varchar(255)not null,profilepicture varchar(255),mailflg boolean,age int not null,delflg boolean not null,password varchar(20) not null);
# APIセッションテーブル
create table apisession(userid varchar(255) ,endday date , sessionid varchar(255) not null,foreign key(userid)references clientuser(userid),foreign  key(userid) references adminuser(userid),primary key(userid,endday));
# グループ用テーブル
create table grouptable(groupname varchar(40),adminid varchar(255),qcode varchar(255) not null,endday date not null,foreign key(adminid) references adminuser(userid),primary key(groupname,adminid));
# １グループ内のメンバー
create table groupmember(adminid varchar(255), groupname varchar(40), clientid varchar(255), foreign key(adminid)references adminuser(userid),foreign key(groupname) references grouptable(groupname), foreign key(clientid) references clientuser(userid),
primary key(groupname,adminid,clientid));
# クラスノートテーブル
create table classnote(noteid varchar(255) primary key, clientid varchar(255) not null, releaseflg boolean not null, groupname varchar(50) not null, adminid varchar(255) not null, timeid int, subject int,
 foreign key(clientid) references clientuser(userid), foreign key(groupname) references grouptable(groupname), foreign key(adminid) references adminuser(userid), foreign key(timeid) references time(id),
 foreign key(subject) references  subject(id));
# 授業計画表
create table timetable(adminid varchar(255) not null, groupname varchar(255) not null, clientid varchar(255) not null, jpegnumber varchar(255) not null, foreign key(adminid) references adminuser(userid), foreign key(groupname) references grouptable(groupname), foreign key(clientid) references clientuser(userid));
# 教科テーブル
create table subject(id int not null primary key,name varchar(40)not null);
# 時間割テ―ブル
create table time(id int not null primary key,name varchar(40)not null);