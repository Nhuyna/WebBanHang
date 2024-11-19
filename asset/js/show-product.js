function show_product(type, name, link, sl) {
    let i = 0;
    let output = document.querySelector(`.${name}`);
    console.log(link + product[0].img[1]);
    let valueoutput = ` <div class="hot-product-container">`;
    product.forEach((value) => {
        if (i <= sl) {
            value.type.forEach((value1) => {
                if (value1 == type) {
                    i++;
                    if (1 == i % 4) {
                        valueoutput += ` </div>
        <div class="hot-product-container">`;
                    }
                    valueoutput += `  <div class="hot-product-item row-grid product-detail-js" id="${value.id}">
                     <div>
                        <div class="hot-product-image" >
                            <img src="${link + value.img[1]}" alt="" />
                        </div >
                        <div class="hot-product-info">
                            <h3>${value.title}</h3>
                            <span>100% Cotton</span>
                            <div class="product-price">
                                <p>200.000đ <del>${value.price}đ</del></p>
                            </div>
                            <div class="button-1" id="${value.id}">
                               <div id="S" class="size-jss">
                               <button class="button-1-mini size-js active" id="S">S</button>
                               <button class="button-1-mini size-js" id="M">M</button>
                               <button class="button-1-mini size-js" id="L">L</button>
                               <button class="button-1-mini size-js" id="XL">XL</button>
                               </div>
                               
                                  Số lượng:
                                <div class="product-detail-right-quantity-input" id="${value.id}">
                                 
                                <i class="ri-subtract-fill"></i>
                               
                                <input class="quantity-input" type="number"  value="1"/>
                                <i class="ri-add-line"></i>
                               
                                </div>
                                    <div class="product-detail-right-addcart">
              <button class="main-btn add-cart-js">Thêm vào giỏ hàng</button>
            </div>
                            </div>
                        </div>
            </div >
          </div > `
                }
            });
        }
    });
    valueoutput += `</div > `;
    output.innerHTML = valueoutput;
    // <i class="fa-solid fa-cart-plus"></i>
    // <span>add to cart</span>

}
