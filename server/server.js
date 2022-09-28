const express = require('express');

const app = express();

let comments = [
    'Servers are neat',
    'Well akhshully....',
    'narwhal bacon something something... undertaker...'
];

// Make files in the server/public folder
// available to who wants them
app.use(express.static('./server/public'));

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

app.listen(3000, () => {
    console.log('We\'re live! 🎰');
});

console.log('in server.js! 💼');