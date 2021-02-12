var express = require('express');

const bodyParser = require('body-parser');

var app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// const cors = require('cors');
// app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    //commentout line to see waiting status on server
    // res.send('Hello World');
    res.render("index");
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})