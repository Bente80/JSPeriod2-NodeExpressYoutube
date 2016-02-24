/**
 * Created by Bente on 18-02-2016.
 */
// This is just an example of an website created by following a youtube video.

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended : true}));

var toDoItems = [
{id: 1, desc: "chat"},
{id: 2, desc: "rip"},
{id: 3, desc: "sap"},
{id: 4, desc: "gut"}
];

app.get('/',function(req, res){
    res.render('index', {
        title:"My app",
        items: toDoItems
    });
});

app.post('/add', function(req, res){
var newItem = req.body.newItem;
toDoItems.push({
    id : toDoItems.length + 1,
    desc: newItem
});
    res.redirect('/');
});

app.listen(1337, function(){
    console.log('ready on port 1337');
});