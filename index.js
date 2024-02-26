const express = require('express')
const axios = require('axios')
const path = require('path')
const app = express()
var bodyParser = require('body-parser')

const base_url = "http://localhost:3000"
//const base_url = "http://10.104.7.149"
//const base_url = "http://node56420-noedrestfifu.proen.app.ruk-com.cloud"



app.set('views', path.join(__dirname, "/public/views"))
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}))


app.use(express.static(__dirname + '/public'))


//1111111111111


//ดูทั้งหมด
app.get('/movie', async(req,res)=>{
   try{
    const respones = await axios.get(base_url + '/movie')
    res.render("movie/books",{movie:respones.data})
   }catch(err){
    console.error(err)
    res.status(500).send('Error')
   }
})
//ดูทั้งหมด


//ดูแต่ละอัน
app.get('/movie/:id',async(req,res)=>{
    try{
        const respones = await axios.get(base_url + '/movie/' + req.params.id)
        res.render("movie/book",{movie:respones.data})
       }catch(err){
        console.error(err)
        res.status(500).send('Error')
       }
})
//ดูแต่ละอัน



// show create desktop
app.get('/movi/create',(req,res)=>{ 
    res.render("movie/create")
})

app.post('/movi/create',async(req,res)=>{
   try{
    const data = { movie_name: req.body.movie_name , genre: req.body.genre}
    await axios.post(base_url + '/movie' ,data)
    res.redirect('/movie')
   }catch(err){
    console.error(err)
    res.status(500).send('Error')
   }
})
// show create desktop


//update
app.get('/movie/update/:id',async(req,res)=>{
    try{
        const respones = await axios.get(
            base_url + '/movie/' + req.params.id) 
            res.render('movie/update',{movie: respones.data})
  } catch(err){
      console.error(err)
      res.status(500).send('Error')
    }
})

app.post('/movie/update/:id',async(req,res)=>{
   try{
    const data = { movie_name: req.body.movie_name , genre: req.body.genre}
    await axios.put(base_url + '/movie/' + req.params.id,data)
    res.redirect('/movie')
   }catch(err){
    console.error(err)
    res.status(500).send('Error')
   }
})
//update

//delete
app.get('/movi/delete/:id',async(req,res)=>{
   try{
    await axios.delete(base_url + '/movie/' + req.params.id)
    res.redirect('/movie')
   }catch(err){
    console.error(err)
    res.status(500).send('Error')
   }
})
//delete


//222222222222222


//ดูทั้งหมด
app.get('/user', async(req,res)=>{
    try{
     const respones = await axios.get(base_url + '/user')
     res.render("user/bookss",{user:respones.data})
    }catch(err){
     console.error(err)
     res.status(500).send('Error')
    }
 })
 //ดูทั้งหมด
 
 
 //ดูแต่ละอัน
 app.get('/user/:id',async(req,res)=>{
     try{
         const respones = await axios.get(base_url + '/user/' + req.params.id)
         res.render("user/bookk",{user:respones.data})
        }catch(err){
         console.error(err)
         res.status(500).send('Error')
        }
 })
 //ดูแต่ละอัน
 
 
 
 // show create desktop
 app.get('/use/create',(req,res)=>{ 
     res.render("user/create")
 })
 
 app.post('/use/create',async(req,res)=>{
    try{
     const data = { username: req.body.username , email: req.body.email}
     await axios.post(base_url + '/user' ,data)
     res.redirect('/user')
    }catch(err){
     console.error(err)
     res.status(500).send('Error')
    }
 })
 // show create desktop
 
 
 //update
 app.get('/user/update/:id',async(req,res)=>{
     try{
         const respones = await axios.get(
             base_url + '/user/' + req.params.id) 
             res.render('user/update',{user: respones.data})
   } catch(err){
       console.error(err)
       res.status(500).send('Error')
     }
 })
 
 app.post('/user/update/:id',async(req,res)=>{
    try{
        const data = { username: req.body.username , email: req.body.email}
     await axios.put(base_url + '/user/' + req.params.id,data)
     res.redirect('/user')
    }catch(err){
     console.error(err)
     res.status(500).send('Error')
    }
 })
 //update
 
 //delete
 app.get('/use/delete/:id',async(req,res)=>{
    try{
     await axios.delete(base_url + '/user/' + req.params.id)
     res.redirect('/user')
    }catch(err){
     console.error(err)
     res.status(500).send('Error')
    }
 })
 //delete

app.listen(5500,()=> console.log(`Listening on port 5500`)) //เอาไว้บรรทัดสุดท้ายห้ามยุ่ง