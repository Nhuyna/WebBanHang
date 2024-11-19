// Menu Bar
const menu = document.querySelector('.toggle')
.addEventListener('click', ()=>{toggleMenu()})
function toggleMenu(){
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// Delete PopUp
const delete_btn = document.querySelector('.delete-btn'); 
const delete_popup = document.querySelector('.delete-popup'); 
const popup_close_btn = document.querySelector('.popup-close-btn'); 
const popup_cancel_btn = document.querySelector('.popup-cancel-btn'); 
const popup_confirm_btn = document.querySelector('.popup-confirm-btn'); 
delete_btn.addEventListener('click', ()=>{
    delete_popup.classList.add('active');
});
popup_close_btn.addEventListener('click', ()=>{
    delete_popup.classList.remove('active');
});
popup_cancel_btn.addEventListener('click', ()=>{
    delete_popup.classList.remove('active');
});
popup_confirm_btn.addEventListener('click', ()=>{
    delete_popup.classList.remove('active');
});

// Add Product PopUp
const add_product = document.querySelector('.add-product');
const add_product_popup = document.querySelector('.add-product-popup');
const a_p_popup_close_btn = document.querySelector('.a-p-popup-close-btn');
const a_p_cancel_button = document.querySelector('.a-p-cancel-button');
const add_p_button = document.querySelector('.add-p-button');
add_product.addEventListener('click', ()=>{
    add_product_popup.classList.add('active');
});
a_p_popup_close_btn.addEventListener('click', ()=>{
    add_product_popup.classList.remove('active');
});
a_p_cancel_button.addEventListener('click', ()=>{
    add_product_popup.classList.remove('active');
});
add_p_button.addEventListener('click', ()=>{
    add_product_popup.classList.remove('active');
});
const inputFileImage = document.querySelector('#image');
const imgArea = document.querySelector('.img-area');
inputFileImage.addEventListener('change', function (){
    const image = this.files[0];
    const reader = new FileReader();
    reader.onload = ()=>{
        const imgUrl = reader.result;
        const img = document.createElement('img');
        img.src = imgUrl;
        imgArea.appendChild(img);
    }
    reader.readAsDataURL(image);
});

// Edit Product PopUp
const edit_btn = document.querySelector('.edit-btn');
const edit_popup = document.querySelector('.edit-popup');
const e_popup_close_btn = document.querySelector('.e-popup-close-btn');
const e_cancel_button = document.querySelector('.e-cancel-button');
const e_button = document.querySelector('.e-button');
edit_btn.addEventListener('click', ()=>{
    edit_popup.classList.add('active');
});
e_popup_close_btn.addEventListener('click', ()=>{
    edit_popup.classList.remove('active');
});
e_cancel_button.addEventListener('click', ()=>{
    edit_popup.classList.remove('active');
});
e_button.addEventListener('click', ()=>{
    edit_popup.classList.remove('active');
});