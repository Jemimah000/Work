const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Server Is Running");
})

app.use(express.json());
app.post("/detail",(req,res)=>{
    const {name,rating}=req.body;
    if(!name){
       return res.status(404).json({error:"Cartoon Name Cannot be EMPTY !!!"});
    }
    if(!rating){
        return res.status(400).json({error:"Rating of that cartoon cannot be EMPTY !!!"});
    }
    res.json({
        message : "Rated SUCCESSFUL",
        data:{
            "Name of Cartoon" : name,
            "Rating" : rating
        }
    })
})
    app.listen(PORT,()=>{
        console.log(`Server is running at http://localhost:${PORT}`)

})