// Login
const admin = {
    user: 'adminSieuCute',
    pass: '123456789'
};
const form = document.getElementById('form');
const user = document.getElementById('login-name');
const pass = document.getElementById('login-pass');
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
btn.addEventListener('click', ()=>{
    if(user.value === admin.user && pass.value === admin.pass){
        window.location.href = "admin.html";
        user.value = '';
        pass.value = '';
    }else{
        // const input_box = document.querySelector('input-box');
        // input_box.classList.add('invalid');
    }
});
