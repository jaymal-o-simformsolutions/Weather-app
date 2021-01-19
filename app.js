const path = require('path')
const express = require('express')
const hbs =  require('hbs')
const forcast = require('./apis/forcast')
const geolocation = require('./apis/geolocation')

const app = express()
const port = 
console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, './template')) 
const partial = path.join(__dirname, './partials')
hbs.registerPartials(partial)
app.get('',(req,res)=>{
    res.render('index',{
        title: "Weather",
        name:"jaymal"
    })      
})

app.get('/about',(req,res)=>{ 
    res.render('about',{
       name:'jay'
    })      
})


app.get('/about',(req,res)=>{
    res.send([{
        name:'jaymal',
        adderess:"porbandar",
        phone:7874459020
    }])
})

app.get('/weather',(req,res)=>{
   if(!req.query.adderess){
       return res.send({error:'please provide adderess'})
   }
    geolocation(req.query.adderess,(error,{latitude,longitude,location}={})=>{
         if(error){
             return res.send({error})
         }
         forcast(longitude,latitude,(error,data)=>{ 
            if(error){
                return res.send({error})
            }
            res.send({
                forcast:`feels like ${data}c`,
                location,
                adderess:req.query.adderess
            })  
         })   
    })
  
})

app.get('/jk', function(req, res){ 
     
    res.download('C:/Users/Jaymal/Desktop/node js/web-Server/app.js', 'app.js')   

});



app.listen(8080,()=>{
    console.log('server listening on port 8080')
})