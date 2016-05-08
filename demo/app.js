var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(path.resolve('./public')));
app.use(bodyParser.json())


app.route('/').get(function (req, res) {
  res.render('index.html');
});


app.route('/testAwesomeForm').post(function (req, res) {
	setTimeout(function(){

		var re = /\S+@\S+\.\S+/;
    	if(re.test(req.body.email))
			res.status(200).send('Success!');

		else
			res.status(400).send('Please provide a valid email address!');

	}, 1000);
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});