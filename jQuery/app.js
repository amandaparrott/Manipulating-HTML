$(document).ready(function () {

    //create button with nice message
    $('<button id="button">Click Me!</button>').appendTo('body');

    $('#button').click(function (event) {
        event.preventDefault();
        alert("You're Pretty");
    });

    //display message from field in alert
    $('#btnSubmit').click(function (event) {
        event.preventDefault();
        let message = $('input').val();
        alert(message);
    });

    //change background color of div with mouseover/mouseleave
    $('#mainDiv').mouseenter(function () {
        $('#mainDiv').css('background-color', 'blue');
    });

    $('#mainDiv').mouseleave(function () {
        $('#mainDiv').css('background-color', 'white');
    });

    // create paragraph
    $('<p>paragraph text. more paragraph text. even more paragraph text</p>').appendTo('body');

    //click to change color of text in paragraph
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };
        return color;
    };
    $('p').click(function () {
        $('p').css('color', getRandomColor());
    })

    //add button and empty div
    $('<button id="newButton">Name</button>').appendTo('body');
    $('<div id="newDiv"></div>').appendTo('body');

    //name span when button is clicked
    $('#newButton').click(function () {
        $('<span>Amanda Parrott</span>').appendTo('#newDiv');
    });

    //friends button, array, and function
    let friends = ["Linc", "Amy", "Holley", "Justin", "Tailor", "Paul", "Elizabeth", "Chelsea", "Maya", "Danielle"];
    let friendx = 0;
    $('#friendBtn').click(function() {
        if (friends[friendx]) {
            $('<li>' + friends[friendx] + '</li>').appendTo('#friendsList');
            friendx++;
        } else {
            alert ("You don't have any more friends...");
        };
    });

    //end of body
});
