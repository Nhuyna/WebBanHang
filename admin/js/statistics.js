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

// Statistic products
const products = [{
    productId: '789456',
    productName: 'Áo thun',
    productImage: './img/2484.ULSMV.TSZ705__CLASSICVENOM_1_DEN.png',
    productAmount: '50',
    productPrice: '1500000'
},{
    productId: '789456',
    productName: 'Áo thun',
    productImage: './img/2484.ULSMV.TSZ705__CLASSICVENOM_1_DEN.png',
    productAmount: '30',
    productPrice: '1000000'
},{
    productId: '789456',
    productName: 'Áo thun',
    productImage: './img/2484.ULSMV.TSZ705__CLASSICVENOM_1_DEN.png',
    productAmount: '100',
    productPrice: '3000000'
},{
    productId: '789456',
    productName: 'Áo thun',
    productImage: './img/2484.ULSMV.TSZ705__CLASSICVENOM_1_DEN.png',
    productAmount: '150',
    productPrice: '5000000'
},{
    productId: '789456',
    productName: 'Áo thun',
    productImage: './img/2484.ULSMV.TSZ705__CLASSICVENOM_1_DEN.png',
    productAmount: '80',
    productPrice: '4300000'
}];
// table
renderProduct();
function renderProduct(){
    let tableHTML='';
    let total='';
    let totalPrice = 0;
    for(let i=0; i<products.length; i++){
        const{productId, productName, productImage, productAmount, productPrice} = products[i];
        tableHTML += 
        `<tr>
            <td>${productId}</td>
            <td>${productName}</td>
            <td><img class="product-img" src="${productImage}" alt=""></td>
            <td>${productAmount}</td>
            <td>${productPrice}</td>
        </tr>`;
        totalPrice += Number(productPrice);
    }
    document.querySelector('.product-list').innerHTML = tableHTML;

    total += 
    `<tr>
        <td colspan="4">Tổng doanh thu trên các mặt hàng:</td>
        <td>${totalPrice}</td>
    </tr>`;
    document.querySelector('.total-price').innerHTML = total;
    let min = Number(products[0].productAmount);
    let max = Number(products[0].productAmount);
    let vt_min=0;
    let vt_max=0;
    for(let i=0; i<products.length; i++){
        if(Number(products[i].productAmount) < min){
            vt_min = i;
            min = Number(products[i].productAmount);
        }
        if(Number(products[i].productAmount) > max){
            vt_max = i;
            max = Number(products[i].productAmount);
        }
    }
    const rows = document.querySelector('.product-list').getElementsByTagName('tr');
    rows[vt_min].style.color = "red";
    rows[vt_max].style.color = "blue";
}

// filter
const option = document.getElementById('statistic-option');
const statis_products = document.querySelector('.products');
const statis_customers = document.querySelector('.customers');
option.addEventListener('change', ()=>{
    const selectValue = option.value;
    if(selectValue === "Tất cả"){
        statis_products.style.display = '';
        statis_customers.style.display = '';
    }
    if(selectValue === "Mặt hàng"){
        statis_products.style.display = '';
        statis_customers.style.display = 'none';
    }
    if(selectValue === "Khách hàng"){
        statis_customers.style.display = '';
        statis_products.style.display = 'none';
    }
});