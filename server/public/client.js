console.log('in client.js 🎀');

// State!
let comments = [];
let firstComment;

$(document).ready(onReady);

function onReady() {
    console.log('So ready 🦩');

    loadFirstComment();
    loadComments();

    // Event: Jimmy submits the form
    $('#commentForm').on('submit', onAddComment)
}

function onAddComment(evt) {
    evt.preventDefault();

    let newComment = {
        message: $('#commentInput').val(),
        author: 'Jimmy'
    };

    $.ajax({
        url: '/comments',
        method: 'POST',
        // Always use an object
        // if you know what's good for ya
        //
        // 👇 this becomes req.body
        // on the server
        data: newComment
    })
        .then(response => {
            console.log('POST /comments response', response);

            // Get the latest comments from the server
            // and render them 
            // (including Jimmy's new comment)
            loadComments();
        })
        .catch(err => {
            console.log('POST /comments error', err);
        });
}


function loadFirstComment() {
    $.ajax({
        url: '/comments/first',
        method: 'GET'
    })
        .then(response => {
            console.log('GET /comments/first', response);

            firstComment = response;

            render();
        })
        .catch(err => {
            console.log('GET /comments/first error', err);
        })
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

            // Update state!
            // Save the comments data from the server
            // to our global comments variable
            comments = response;

            render();
        })
        .catch((err) => {
            // code goes here....
            console.log('GET /comments error 🦍', err);
            alert('Sorry, it\'s a little broke right now')
        });

    console.log('I\'m not waiting around 🕥')

}


function render() {
    console.log('In render', comments, firstComment);

    // Render comments to the DOM
    $('#comments').empty();
    for (let cmt of comments) {
        $('#comments').append(`
            <li>${cmt}</li>
        `);
    }

    $('#firstComment').text(firstComment);
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