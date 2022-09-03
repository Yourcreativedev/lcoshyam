const express = require('express');
const format = require('date-format');
const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res)=>{
    res.status(202).send("<h1>Hello from Shyam</h1>")
});


app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username : "shyamendrahazra",
        follwers : 80,
        follows : 97,
        date : format.asString("dd:MM:yyyy - hh:mm:ss", new Date()),
        platform : "instagram"
    }
    
    res.status(200).json(instaSocial)
});
app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username : "Shyamendra Hazra",
        follwers : 20,
        follows : 97,
        date : format.asString("dd:MM:yyyy - hh:mm:ss", new Date()),
        platform : "facebook"
    }
    
    res.status(200).json(instaSocial)
});
app.get("/api/v1/linkedin", (req, res) => {
    const instaSocial = {
        username : "Shyamendra Hazra",
        follwers : 20,
        follows : 97,
        date : format.asString("dd:MM:yyyy - hh:mm:ss", new Date()),
        platform : "linkedin"
    }
        
    res.status(200).json(instaSocial)
});

app.get("/api/v1/:token", (req,res) => {
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
});

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});

