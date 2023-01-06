
// menu bar .............................

var bar = document.getElementById('bar');
var close = document.getElementById('close');
var nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// contact form .............................

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mrisaackatana@gmail.com",
        Password : "StillScorpio101",
        To : 'mrisaackatana@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiries",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email : " + document.getElementById("email").value
        + "<br> Phone no : " + document.getElementById("phone").value
        + "<br> Message : " + document.getElementById("message").value
    }).then(
        message => alert('Message sent successfully')
    );
}