const express=require('express')
const router=express.Router()
// const moviesModel=require('../models/movies')
const {getMovie,getAllMovies, createANewMovie, getAMovie,updateAMovie,deleteAMovie}=require('../controllers/movie')
router.route('/').get(getAllMovies).post(createANewMovie)
router.route('/:id').get(getMovie,getAMovie).patch(getMovie,updateAMovie).delete(getMovie,deleteAMovie)

module.exports=router 
// router.get('/:id',(request,response)=>{
//     response.send(`Displaying all movies ${request.params.id}`)
// })
// router.post('/',(request,response)=>{
//     response.send(`Adding movies`)
// })
// router.patch('/',(request,response)=>{
//     response.send(`Updating movies`)
// })
// router.delete('/',(request,response)=>{
//     response.send(`deleting~ movies`)
// })
// module.exports=router;