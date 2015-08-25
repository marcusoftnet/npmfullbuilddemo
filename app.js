var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Deployed with a build script using npm only, baby!';
});

app.listen(process.env.PORT || 3000);