let express = require("express")
let app =  express()
app.use(express.json())
let bodyParser =  require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
let courses = [
    {"id":1,"name":"Js","instructor":"Stanley"},
    {"id":2,"name":"WUI","instructor":"Louis"}
]
//api
app.get("/",function(req,res){
    res.send({"message":"welcome to class c magic"})
})
app.get("/courses",function(req,res){
    res.send(courses)
})
app.post("/addcourses",function(req,res){
    let course  = req.body
    if(course !=null){
        courses.push(course)
        res.status(201)
        res.send(courses)
    }else{
        res.status(400)
        res.send({"message":"Body cant be empty"})
    }
})
app.listen(5000,function(){
    console.log("Application runing on port 5000")
})






