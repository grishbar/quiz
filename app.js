var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
const path = require('path');
 
var app = express();
var jsonParser = bodyParser.json();
const port = process.env.PORT || 3001;
 
//app.use(express.static(__dirname + "/public"));
// получение списка данных
app.get("/api/question-data", function(req, res){
    var content = fs.readFileSync("question-data.json", "utf8");
    var questionData = JSON.parse(content);
    res.send(questionData);
});

// получение отправленных данных
app.post("/api/question-data/add-answers", jsonParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    var content = fs.readFileSync("question-data.json", "utf8");
    var data = JSON.parse(content);
    data[req.body.questionNumber - 1]["answers"][req.body.choosedAnswer] += 1;
    // перезаписываем файл с новыми данными
    fs.writeFileSync("question-data.json", JSON.stringify(data));
    res.send(data);
});

app.post("/api/question-data/change-isactive", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
    var content = fs.readFileSync("question-data.json", "utf8");
    var data = JSON.parse(content);
    data[req.body.questionNumber - 1]["isActive"] = req.body.isActive;
    // перезаписываем файл с новыми данными
    fs.writeFileSync("question-data.json", JSON.stringify(data));
});

app.post("/api/question-data/change-isfinished", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
    var content = fs.readFileSync("question-data.json", "utf8");
    var data = JSON.parse(content);
    data[req.body.questionNumber - 1]["isFinished"] = req.body.isFinished;
    // перезаписываем файл с новыми данными
    fs.writeFileSync("question-data.json", JSON.stringify(data));
});

app.post("/api/question-data/reset-question", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
    var content = fs.readFileSync("question-data.json", "utf8");
    var data = JSON.parse(content);
    data[req.body.questionNumber - 1] = {"questionNumber":req.body.questionNumber,"isFinished":false,"answers":[0,0,0],"isActive":false};
    // перезаписываем файл с новыми данными
    fs.writeFileSync("question-data.json", JSON.stringify(data));
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
  
app.listen(port, function(){
    console.log(`Listening on port ${port}`);
});