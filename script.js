const loginSuccess = document.getElementById('login-success')

function loading() {
    setTimeout(() => {
        document.getElementsByClassName('loader-container')[0].style.display = 'none';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', loading);

function changeImage(newImage) {
    document.getElementById('image1').src = newImage;
}

function changeImage2(newImage2) {
    document.getElementById('image2').src = newImage2;
}

loginSuccess.addEventListener('click', function() {
    alert("Login SuccessFully")
})