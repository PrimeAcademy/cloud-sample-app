const express = require('express');

const app = express();

// Make files in the server/public folder
// available to who wants them
app.use(express.static('./server/public'));

app.listen(3000, () => {
    console.log('We\'re live! 🎰');
});

console.log('in server.js! 💼');