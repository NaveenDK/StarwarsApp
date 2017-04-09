var moviesJSON=require('../movies.json');

//Home
exports.home=function(req,res){
  var movies=moviesJSON.movies;

res.render('home',{
  title:"Star Wars Movies",
  movies:movies
    });
};

//movie_single
exports.movie_single=function(req,res){
  var episode_number=req.params.episode_number;
 var movies=moviesJSON.movies;

if(episode_number>=1 && episode_number <=6){
    var movie= movies[episode_number-1];//movie represents the object
    var title=movie.title;
    var main_characters=movie.main_characters;
    res.render('movie_single',{
     movies:movies,
     title:title,
     movie:movie,
     main_characters:main_characters

   });
} else{
  //res.send("This is not the page you are looking for");
  res.render('notFound',{
    movies:movies,
    title: "This is not the page you are looking for"
  });
}


//  res.send("THis is a page for episode"+episode_number);
};

//notFound
exports.notFound=function(req,res){
    var movies=moviesJSON.movies;
    //res.send("This is not the page that you are looking for");
    res.render('notFound',{
        movies:movies,
        title:"This is not the page you are looking for"

    })
};
