var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/* expressをhttps化する場合に使用する
var https = require('https');
var fs = require('fs');
var options = {
  key:fs.readFileSync('/etc/letsencrypt/live/domainname/privkey.pem'),
  cert:fs.readFileSync('/etc/letsencrypt/live/domainname/cert.pem')
};
var server = https.createServer(options,app);
*/
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var subjectRouter = require('./routes/subject');
var userloginRouter = require('./routes/userlogin');
var groupRouter = require('./routes/group');
var timeRouter = require('./routes/time');
var noteRouter = require('./router/note');
var app = express();

// view engine setup
// cros問題対策
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');  // ← コレを追加
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/subject',subjectRouter);
app.use('/login', userloginRouter);
app.use('/group', groupRouter);
app.use('/time', timeRouter);
app.use('/', noteRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(4001);
module.exports = app;
