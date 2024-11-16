const sliderItem = document.querySelectorAll(".slider-item");
for (let i = 0; i < sliderItem.length; i++) {
  sliderItem[i].style.left = i * 100 + "%";
}

const slider = document.querySelector(".slider-container");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
if (next != null && prev != null) {
  let counter = 0;
  next.addEventListener("click", () => {
    counter++;
    carousel();
  });
  prev.addEventListener("click", () => {
    counter--;
    carousel();
  });
  function carousel() {
    if (counter < 0) {
      counter = sliderItem.length - 1;
    }
    if (counter === sliderItem.length) {
      counter = 0;
    }
    slider.style.transform = "translateX(" + -counter * 100 + "%)";
  }
}

//menu bar
const menu = document.querySelector(".header-bar-icon");
const nav = document.querySelector(".header-nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

//header scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  header.classList.toggle("sticky", window.scrollY > 0);
});
// product detail
function showimgpd() {
  const imageSmall = document.querySelectorAll(".product-image-items img");
  const imageBig = document.querySelector(".product-image-main");
  console.log(`img nhỏ ${imageSmall}`);
  console.log(`img lớn ${imageBig}`);
  for (let i = 0; i < imageSmall.length; i++) {
    imageSmall[i].addEventListener("click", () => {
      imageBig.src = imageSmall[i].src;
      imageSmall[i].classList.add("active");
      for (let j = 0; j < imageSmall.length; j++) {
        if (i !== j) {
          imageSmall[j].classList.remove("active");
        }
      }
    });
  }
}

//Thêm số lượng sản phẩm
function Themslsp() {
  document.querySelectorAll(".ri-add-line").forEach((VALUE) => {
    VALUE.addEventListener("click", () => {
      let sl = 0;
      let size = VALUE.parentElement.parentElement.firstElementChild.id;
      console.log(VALUE.parentElement);
      product.forEach((value) => {
        if (value.id == VALUE.parentElement.id) {
          sl = value.size[size].SL;
        }
      });
      document.querySelectorAll(".quantity-input").forEach((value1) => {
        if (value1.parentElement.id == VALUE.parentElement.id && value1.value < sl) {
          value1.value++;
        }
      })
    });
  });
}
Themslsp();

//Chọn size
function chonsize() {
  document.querySelectorAll(".size-jss").forEach((VALUE) => {
    let parentElementid = VALUE.parentElement.id;
    VALUE.querySelectorAll('*').forEach((value) => {
      value.addEventListener("click", () => {
        VALUE.querySelector(".active").classList.remove(("active"));
        value.classList.add("active");
        VALUE.id = value.id;
      })
    })
    // VALUE.addEventListener("click", () => {
    //   document.querySelector(".active").classList.remove("active");
    //   VALUE.parentElement.id = VALUE.id;
    //   VALUE.classList.add("active");
    // })
  })
}

chonsize();

//Giảm số lượng sp
function GiamSLSP() {
  document.querySelectorAll(".ri-subtract-fill").forEach((VALUE) => {
    VALUE.addEventListener("click", () => {
      let id = VALUE.parentElement.id;
      document.querySelectorAll(".quantity-input").forEach((value1) => {
        if (value1.parentElement.id == id && value1.value > 1) {
          value1.value--;
        }
      })
    });
  })
}
GiamSLSP();
//Ban đầu
function setcart() {
  console.log(cart);
  let sl = 0;
  cart.forEach((value) => {
    sl += value.quantity;
  })
  document.querySelector(".ri-shopping-cart-line").setAttribute('number', sl);
}
let cart = JSON.parse(localStorage.getItem('cart')) || [];
// let cart = [];
//THêm sản phẩm vào giỏ hàng
function addcart() {

  // let cart = [];
  // console.log(cart);
  document.querySelectorAll(".add-cart-js").forEach((Value) => {
    Value.addEventListener("click", () => {
      let Size = Value.parentElement.parentElement.firstElementChild.id;
      console.log(`size ${Value.parentElement.parentElement.firstElementChild.id}`)
      let productId = Value.parentElement.parentElement.id;
      console.log(`idsp ${Value.parentElement.parentElement.id}`)
      const productIndex = cart.findIndex(item => item.id === productId);
      let sl;

      try {
        // Lấy giá trị từ phần tử đầu tiên
        sl = parseInt(Value.parentElement.parentElement.children[1].children[1].value);
        if (isNaN(sl)) {
          sl = parseInt(Value.parentElement.parentElement.children[2].children[1].value);
        }
      } catch (e) {
        console.error("Error encountered: " + e);
        sl = parseInt(Value.parentElement.parentElement.children[2].children[1].value);
      }
      // console.log(sl);  // Kiểm tra kết quả của sl
      // let sl =(parseInt(Value.parentElement.parentElement.children[1].children[1].value)) ;
      // // 
      // console.log(Value.parentElement.parentElement.children[2].children[1].value);
      // console.log("hi");
      let number = document.querySelector(".ri-shopping-cart-line");
      if (productIndex !== -1 && cart[productIndex].size == Size) {
        cart[productIndex].quantity += sl;

      } else {
        // Nếu chưa có, thêm sản phẩm mới vào giỏ hàng
        cart.push({
          id: productId,
          size: Size,
          quantity: sl
        });
      }
      // cart.forEach((V) => {
      //   console.log(V);
      // })
      setcart();
      // document.querySelector(".ri-shopping-cart-line").setAttribute('number', sl);
      localStorage.setItem('cart', JSON.stringify(cart));
    });


  });
}
addcart();
setcart();



//Giỏ hàng

document.querySelector(".ri-shopping-cart-line").addEventListener("click", () => {

})

///Chi tiết sản phẩm
function dieu_huong(a, b) {
  if (a == "ctsp") {
    let pd;
    product.forEach((value) => {
      if (b == value.id) {
        pd = value;
      }
    })
    console.log(document.querySelector('script.showhotproduct'));

    let output = document.querySelector('.body').innerHTML;
    let valueoutput = "";
    valueoutput += `    <section class="product-detail p-to-top">
      <div class="container">
        <div class="row-flex row-flex-product-detail">
          <p>Sản phẩm</p>
          <i class="ri-arrow-right-line"> </i>
          <p>${pd.title}</p>
        </div>
        <div class="row-grid">
          <div class="product-detail-left">
            <img class="product-image-main"
              src="${pd.img[0]}" alt="" />
            <div class="product-image-items">`;
    pd.img.forEach((image) => {
      console.log(image);
      valueoutput += `<img src="${image}" alt="" />`;
      // valueoutput = valueoutput + `< img class="" src = "${image}" alt = "" />`;
    });
    valueoutput += `
            </div >
          </div >
      <div class="product-detail-right" id="${pd.id}">
        <div class="product-detail-right-info" id="S">
          <h1>${pd.title}</h1>
          <span>100% Coton</span>
          <div class="product-price">
            <p>200.000đ <del>300.000đ</del></p>
          </div>
        </div>
        <div class="product-detail-right-des">
          <h2>Đặc điểm nổi bật</h2>
          <ul>`
    pd.introduce.forEach((intro) => {
      valueoutput += `<li>${intro}</li>`;
    })

    valueoutput += `
          </ul >
        </div >
        <div class="product-detail-right-quantity">
         <div id="S" class="size-jss">
                               <button class="button-1-mini size-js active" id="S">S</button>
                               <button class="button-1-mini size-js" id="M">M</button>
                               <button class="button-1-mini size-js" id="L">L</button>
                               <button class="button-1-mini size-js" id="XL">XL</button>
                               </div>
          <h2>Số lượng:</h2>
          <div class="product-detail-right-quantity-input" id="${pd.id}">
            <i class="ri-subtract-fill"></i>
            <input class="quantity-input" type="number" value="1" />
            <i class="ri-add-line"></i>
         
        </div>
        <div class="product-detail-right-addcart">
          <button class="main-btn add-cart-js">Thêm vào giỏ hàng</button>
        </div>
         </div>
      </div >
        </div >
      <div class="row-flex">
        <div class="product-detail-content">
          <h2>Chi tiết sản phẩm</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatem facere, nulla provident delectus distinctio ad. Magni,
            facilis obcaecati rem eos nisi incidunt eius nobis adipisci ipsam
            explicabo dolore odio sit? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dolorem fugit corporis nesciunt! Temporibus quos
            odio cumque voluptates sunt aspernatur nostrum? Adipisci iure nisi
            reiciendis dignissimos ullam cupiditate quas, maxime ex!
          </p>
          <!-- <img src="asset/image/image-baner.jpg" alt="" /> -->
        </div>
      </div>
      </div >
    </section > `;
    console.log("điều hướng rồi");
    document.querySelector('.body').innerHTML = valueoutput;
    console.log(document.querySelector('.body'));
    showimgpd();
    //  document.querySelector(".product-image-items").firstElementChild;
    // document.querySelector(".showhotproduct").firstChild.innerHTML;
    // console.log(document.querySelector(".showhotproduct").firstChild.innerHTML);
    window.scrollTo(0, 0);
    clickproduct();
    chonsize();
    Themslsp();
    GiamSLSP();
    setcart();
    addcart();



  }
  else {
    console.log("hihi");
  }
}

//click vào sp
function clickproduct() {
  document.querySelectorAll(".hot-product-image").forEach((value) => {
    value.addEventListener('click', function () {
      // document.querySelector('script.showhotproduct').innerHTML = document.querySelector('script.showhotproduct').innerHTML.replace('11', '3');
      let productId = this.closest('.hot-product-item').id;
      console.log(productId);
      show_product('hot', 'product-hot-js', 3);
      dieu_huong("ctsp", productId);
    });
  })

}
clickproduct();
