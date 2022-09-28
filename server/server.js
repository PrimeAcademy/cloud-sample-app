const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let comments = [
    'Servers are neat',     //  i=0
    'Well akhshully....',
    'narwhal bacon something something... undertaker...'
];

// Make files in the server/public folder
// available to who wants them
app.use(express.static('./server/public'));

// body parser!
app.use(bodyParser.urlencoded({ extended: true }));

// Like an "Event Handler"
// When Jimmy asks for comments
// http://localhost:3000/comments
// call this function
//
// "The GET /comments endpoint"
app.get('/comments', (req, res) => {
    console.log('Jimmy wants those comments!');

    res.send(comments);
});

// "The GET /comments/first endpoint"
app.get('/comments/first', (req, res) => {
    console.log('in /comments/first');

    res.send(comments[0]);
});

/*
Somewhere in the bowels of body parser

let data = parseTheBody();
req.body = data;
*/

// data
// aka "payload"
// aka "body"

app.post('/comments', (req, res) => {
    // req.body was the data property
    // of our ajax request.
    //
    // req.body will be undefined if
    // you forget to install and setup
    // body-parser
    console.log('data from the client', req.body);

    // How to get the data the client sent me
    let newCommentFromTheClient = req.body.message;

    comments.push(newCommentFromTheClient);

    res.sendStatus(201); // 👍
});

app.listen(3000, () => {
    console.log('We\'re live! 🎰');
});

console.log('in server.js! 💼');