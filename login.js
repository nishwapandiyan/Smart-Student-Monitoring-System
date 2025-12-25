const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register_btn');
const loginBtn = document.querySelector('.login_btn');

registerBtn.addEventListener('click', ()=>{
    container.classList.add('active');
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove('active');
});

/*------------------------ Login Form __________________________*/
const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit',function(e){
    e.preventDefault();

    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
});

/*----------------------------- Register Form--------------------*/

const registerForm = document.querySelector('#registerForm');

registerForm.addEventListener('submit', function(e){
    e.preventDefault();

    localStorage.setItem("isLogged", "true");
    window.location.href = "dashboard.html";
});