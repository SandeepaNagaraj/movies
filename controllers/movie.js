const moviesModel=require('../models/movie')
const getAllMovies =async (request,response)=>
{
    //response.send("List of Movies")
    try{
        const movies=await moviesModel.find();
        response.status(200).json(movies);
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}
const createANewMovie = (async(request,response)=>
{
    //response.send("creating a new movie")
    //response.json(request.body)
    const newmovie=new moviesModel({
        moviename:request.body.moviename ,
        genre:request.body.genre ,
        language:request.body.language,
        releasedDate:request.body.releasedDate,
        ratings:request.body.ratings
    })
    try{
        const student=await newmovie.save();
        response.status(201).json(student);
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
})
const getAMovie =(request,response)=>{
    //response.send(`Updating student with id ${request.params.id}`);
    response.status(200).json(response.movie)
}

const updateAMovie =(async(request,response)=>
{
//response.send(`updating student with id ${request.params.id}`)
if(request.body.moviename!=null)
{
    response.movie.moviename=request.body.moviename;
}
if(request.body.genre!=null)
{
    response.movie.genre=request.body.genre;
}
if(request.body.language!=null)
{
    response.movie.language=request.body.language;
}
if(request.body.releasedDate!=null)
{
    response.movie.releasedDate=request.body.releasedDate;
}
if(request.body.ratings!=null)
{
    response.movie.ratings=request.body.ratings;
}
try{
    const updatedMovie = await response.movie.save();
    response.status(201).json(updatedMovie);
}
catch(error){
    response.status(401).json({message:error.message})
}

})
const deleteAMovie=(async(request,response)=>
{
//response.send(`deleting student with id ${request.params.id}`)
try{
            await response.movie.deleteOne();
            response.json({message:`Deleted the user ${response.movie.moviename}`})
        }
        catch(error){
            response.status(500).json({message:error.message})
        }
})
async function getMovie(request,response,next){
    let movie
    try{
        movie=await moviesModel.findById(request.params.id)
        if(movie==null){
           return  response.status(404).json({message:`Cannot find movie with id ${request.params.id}`})

        }
    }
    catch(error){
return response.status(500).json({message:error.message})
    }
    response.movie=movie;
    next()
}

module.exports={getMovie,getAllMovies,createANewMovie,getAMovie,updateAMovie,deleteAMovie}