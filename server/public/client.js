console.log('in client.js 🎀');

$(document).ready(onReady);

function onReady() {
    console.log('So ready 🦩');

    loadComments();
}

// Get comments (state)
// from the server
function loadComments() {
    console.log('in loadComments 🀄');

    // AJAX = "Async JS And XML"
    // Can make network requests!
    // (ie. make the modem go "beep boop")
    $.ajax({
        // aka http://localhost:3000/comments
        url: '/comments',
        method: 'GET'
    })
        .then((response) => {
            // code goes here.....
            console.log('GET /comments 🍇', response);
        })
        .catch((err) => {
            // code goes here....
            console.log('GET /comments error 🦍', err);
            alert('Sorry, it\'s a little broke right now')
        });

    console.log('I\'m not waiting around 🕥')

    // $(this)
    //     .parent()
    //     .child()
    //     .find()
    //     .sibling()
    //     .fadeOut();
}


























/* 
$(document).ready(() => {
    let state = goGrabDataFromTheServer();

    render();
});

function onUpvote() {
    sendToTheServer({
        totalVotes: 51
    });

    render()
}

function render() {
    for (let post of state.posts) {

    }
}
 */