document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    button.innerText = "Click Me!";
    document.body.appendChild(button);

    button.addEventListener('click', function () {
        alert("You're Pretty");
    });

    let btnSubmit = document.getElementById('btnSubmit');

    //display message from field in alert
    btnSubmit.addEventListener('click', function (event) {
        let message = document.getElementById('field').value;
        event.preventDefault();
        alert(message);
    });

    let div = document.getElementById('mainDiv');

    //change background color of div with mouseover
    div.addEventListener('mouseenter', function () {
        div.style.backgroundColor = 'blue';
    });
    //opposite of above
    div.addEventListener('mouseleave', function () {
        div.style.backgroundColor = 'white';
    });
    //create paragraph
    let p = document.createElement('p');
    let pText = document.createTextNode('paragraph text. more paragraph text. even more paragraph text');
    p.appendChild(pText);
    document.body.appendChild(p);


    //click to change text color in paragraph
    p.addEventListener('click', function () {
        p.style.color = getRandomColor();
    });
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };
        return color;
    };

    // button and empty div
    let newDiv = document.createElement('div');
    let newButton = document.createElement('button');
    newButton.innerText = ('Name');
    document.body.appendChild(newButton);
    document.body.appendChild(newDiv);

    //add span when button is clicked
    newButton.addEventListener('click', function () {
        let span = document.createElement('span');
        newDiv.appendChild(span);
        span.innerText = ('Amanda Parrott');
    });

    //friends button array and function



    let friends = ["Linc", "Amy", "Holley", "Justin", "Tailor", "Paul", "Elizabeth", "Chelsea", "Maya", "Danielle"];
    let friendx = 0;
    let friendBtn = document.getElementById('friendBtn');
    let ul = document.getElementById('friendsList');
    

friendBtn.addEventListener('click', function() {
    if (friends[friendx]) {
        let li = document.createElement('li');
        li.innerText = friends[friendx];
        ul.appendChild(li);
        friendx++;
    } else {
        alert ("You don't have any more friends...");
    };
    }
);

    //end of body
})