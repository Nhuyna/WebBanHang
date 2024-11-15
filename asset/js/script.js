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
const imageSmall = document.querySelectorAll(".product-image-items img");
const imageBig = document.querySelector(".product-image-main");
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

document.querySelectorAll(".ri-add-line").forEach((VALUE) => {
  VALUE.addEventListener("click", () => {
    let sl = 0;
    let size = VALUE.parentElement.parentElement.firstElementChild.id;
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
//THêm sản phẩm vào giỏ hàng
// let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cart = [];
document.querySelectorAll(".add-cart-js").forEach((Value) => {
  Value.addEventListener("click", () => {
    let Size = Value.parentElement.parentElement.firstElementChild.id;
    let productId = Value.parentElement.parentElement.id;
    const productIndex = cart.findIndex(item => item.id === productId);
    let sl = parseInt(Value.parentElement.parentElement.children[1].children[1].value);
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
    sl += parseInt(number.getAttribute('number'));
    number.setAttribute('number', sl);
    cart.forEach((V) => {
      console.log(V);
    })
    localStorage.setItem('cart', JSON.stringify(cart));
  })

});


//Giỏ hàng

document.querySelector(".ri-shopping-cart-line").addEventListener("click", () => {

})
