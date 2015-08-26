var koa = require('koa');
var app = koa();


	console.log(process.argv[2]);

var htmlCode = '<html> \
	<head> \
		<title>A title</title> \
		 \
		<!-- Enable live-reloading --> \
		<script src="//localhost:9091"></script> \
	</head> \
	<body> \
		<h1>Deployed with a build script using npm only, baby!</h1> \
		And live-reloading added too... \
	</body> \
</html>';

app.use(function *(){
	this.body = htmlCode;
});

app.listen(process.env.PORT || (process.argv[2] || 3000));