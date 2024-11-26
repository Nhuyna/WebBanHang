// Login
const admin = {
    user: 'adminSieuCute',
    pass: '123456789'
};
const form = document.getElementById('form');
const user = document.getElementById('login-name');
const user_icon = document.getElementById('user-icon');
const user_message = document.querySelector('.invalid-user');
const pass = document.getElementById('login-pass');
const pass_icon = document.getElementById('pass-icon');
const pass_message = document.querySelector('.invalid-pass');
const btn = document.querySelector('.btn');
const showButton = document.querySelector('.input-box .fa-lock');
showButton.onclick = (()=>{
    if(pass.type === "password"){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
});

// form.addEventListener('submit', e =>{
//     e.preventDefault();
//     // validateInput();
    
//     setError(user.parentElement, 'Vui lòng nhập tên đăng nhập');
// });

// const setSuccess = element =>{
//     const errorDisplay = document.querySelector('.invalid-message');
//     errorDisplay.innerHTML = '';
//     element.classList.remove('invalid');
// }
// const setError = (element, message) => {
//     const errorDisplay = document.querySelector('.invalid-message');
//     errorDisplay.innerHTML = message;
//     element.classList.add('invalid');
// }

// const validateInput = ()=>{
//     const userValue = user.value;
//     const passValue = pass.value;
//     if(userValue === ''){
//         setError(user.parentElement, 'Vui lòng nhập mật khẩu');
//     }else{
//         setSuccess(user.parentElement);
//     }
//     if(passValue === ''){
//         setError(pass.parentElement, 'Vui lòng nhập mật khẩu');
//     }else{
//         setSuccess(pass.parentElement);
//     }
// }

btn.addEventListener('click', formSubmit);
function formSubmit(){
    if(user.value.length === 0){
        user.style.border = "2px solid red";
        user_icon.style.color = "red";
        user_message.style.display = "block";
    }else{
        user.style.border = "2px solid rgba(255, 255, 255, .2)";
        user_icon.style.color = "white";
        user_message.style.display = "none";
    }
    if(pass.value.length === 0){
        pass.style.border = "2px solid red";
        pass_icon.style.color = "red";
        pass_message.style.display = "block";
    }else{
        pass.style.border = "2px solid rgba(255, 255, 255, .2)";
        pass_icon.style.color = "white";
        pass_message.style.display = "none";
    }
    if(user.value !== admin.user && user.value.length>0 && 
        pass.value !== admin.pass && pass.value.length>0){
        user.style.border = "2px solid red";
        user_icon.style.color = "red";
        pass.style.border = "2px solid red";
        pass_icon.style.color = "red";
        pass_message.innerHTML = 'Sai tên đăng nhập và mật khẩu';
        pass_message.style.display = "block";
        user.value='';
        pass.value='';
    }
    if(user.value === admin.user && user.value.length>0 && 
        pass.value !== admin.pass && pass.value.length>0){
        user.style.border = "2px solid rgba(255, 255, 255, .2)";
        user_icon.style.color = "white";
        pass.style.border = "2px solid red";
        pass_icon.style.color = "red";
        pass_message.innerHTML = 'Sai mật khẩu';
        pass_message.style.display = "block";
        pass.value='';
    }
    if(user.value === admin.user && pass.value === admin.pass){
        window.location.href = "admin.html";
        user.value='';
        pass.value='';
    }
}

