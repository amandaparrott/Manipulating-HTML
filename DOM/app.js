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
    //end of body
})