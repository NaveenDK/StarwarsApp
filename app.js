var express =require ('express');

var app =express();//app is a new express applicattion
app.set('view engine','ejs');
var routes =require('./routes');

var path=require('path');
app.use(express.static(path.join(__dirname,'public')));
//Routes

//Home
app.get('/',routes.home);
//movie_single
app.get('/star_wars/:episode_number?',routes.movie_single);
//notFound
app.get('*',routes.notFound);

app.listen(process.env.PORT|| 3000);
