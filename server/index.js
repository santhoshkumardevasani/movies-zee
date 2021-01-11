
const express = require("express");
const axios = require('axios');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const morgan = require("morgan");
app.use(morgan('dev'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Origin",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.get('/movies', (req, res) => {
    try {
        let dataFilePath = path.join(__dirname, "movies.json");
        // console.log("file path@@@@@@@@@@",dataFilePath)
        var data = fs.readFileSync(dataFilePath, 'utf8');
        // console.log(data);
        if(data){
            res.send(data);
        }
        else{
            res.send([]);
        }
        
    } catch (e) {
        console.log('Error:', e.stack);
    }
});
app.post('/addMovie', (req, res) => {
    console.log("addmovie calling from server end==============================>", req.body);
    let requestJson = [req.body];
    let existingData = [],finalData = [];
    let dataFilePath = path.join(__dirname, "movies.json");
    let existingFileData  = fs.readFileSync(dataFilePath, "utf8");
  console.log("existingData==========>",existingData)
if(existingFileData){
    finalData = existingFileData.push(req.body);
}
else{
    finalData = requestJson;
}
    
    fs.writeFile(dataFilePath, JSON.stringify(finalData), (err) => {
        if (err) throw err;
        console.log("file written sucessfully!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11111");
    });
    res.send(requestJson);
});


app.listen(3000, () => {
    console.log('server started on port 3000');
});