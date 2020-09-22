document.addEventListener('DOMContentLoaded', function(){
let button = document.createElement('button');
button.innerText = "Click Me!";
document.body.appendChild(button);

button.addEventListener('click', function() {
    alert ("You're Pretty");
});

let btnSubmit = document.getElementById('btnSubmit');

//display message from field in alert
btnSubmit.addEventListener ('click', function(event) {
    let message = document.getElementById('field').value;
    event.preventDefault();
    alert(message);
});



    //end of body
})