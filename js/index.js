
const menuToggler = $('.menu-toggler')
const navLinks = $('.nav-links')
const productContainer = document.querySelector('.product-list');
const pageNum = document.querySelectorAll('.page-num');
const prevPage = document.querySelector('.page-prev');
const nextPage = document.querySelector('.page-next');
const showcaseImage = document.getElementById('showcase-img');
const slideImages = document.querySelectorAll('.slide-img');
const navBar = document.querySelector('.nav-bar');
const contact = document.querySelectorAll('.contact');
const cartAmount = document.querySelector('#cart-amount');
const closePopupMsgBtns = document.querySelectorAll(".close");
const sliderContainer = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide')
const btnNextSlide = document.querySelector('#nextSlide');
const btnPrevSlide = document.querySelector('#prevSlide');
const logoutBtn = document.querySelector('.sign-out');

const myCart = document.querySelector('#my-cart');
const cartItem = document.querySelector('#mycart-item')
const accountToggle = document.querySelector('.no-account');

var featuredContainer = document.querySelector('.featured-1');
var img_width = 800;
var img_height = 400;
var slideIdx = 0;
var currentPage = 1;
var products;
var toFavList;

// Dont remove this function
// var idx = 0, imagesLength = slideImages.length;
// setInterval(function autoSlide() {
//     idx++;
//     idx = (idx >= imagesLength ? 0 : idx);
//     changeColorAndImg(slideImages[idx].getAttribute('src'), slideImages[idx].getAttribute('alt'));
// }, 3500);

// Menu toggle
$(document).ready(() => {
    menuToggler.click(() => {
        navLinks.toggleClass('menu-active')
        menuToggler.toggleClass('menu-close')
    })
})

accountToggle.addEventListener('click', () => {
    window.location.href = "./login.html";
})

closePopupMsgBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.currentTarget.parentElement.style.display = 'none'
    })
})

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('login')
    window.location.reload();
})

// Sticky navbar after scroll
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('sticky', window.scrollY > 0);
});

// Sticky contact button
window.addEventListener('scroll', () => {
    contact.forEach(idx => {
        idx.classList.toggle('active', window.scrollY > 200);
    })
})

// Landing page - change color and image
slideImages.forEach(slideImg => {
    slideImg.addEventListener('click', (e) => {
        changeColorAndImg(e.currentTarget.getAttribute('src'), e.currentTarget.getAttribute('alt'));
    });
});

function changeColorAndImg(src, newColor) {
    showcaseImage.setAttribute('src', src);
    document.documentElement.style.setProperty('--primary-color', newColor);
}


// Create items
let createItem = (idx) => {
    let item = document.createElement('div');
    item.classList = 'item sell-item';
    item.innerHTML = `
    <div class="product" id="${idx.id}">
        <img class="product-img" src="${idx.img}" alt="">
        <p class="product-name">${idx.name}</p>
    </div>
    <div class="detail">
        <span class="price">${idx.price}</span>
        <i class="far fa-heart to-fav-list"></i>
    </div>
    `
    productContainer.append(item);
}

let getProductDesc = (list) => {
    let len = list.length;
    for (let i = 0; i < len; i++) {
        createItem(list[i]);
    }

    products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('click', (e) => {
            window.location.href = `./product-details.html?product=${e.currentTarget.id}`;
        });
    });

    toFavList = document.querySelectorAll('.to-fav-list');
    toFavList.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('far'))
                item.classList.replace('far', 'fas');
            else
                item.classList.replace('fas', 'far');
        });
    });
}


window.addEventListener('load', () => {
    getProductDesc(page1);
    loadAccount();
})

function loadAccount() {
    let temp = localStorage.getItem('login') != null ? localStorage.getItem('login').split(';') : '0'
    if (temp[0] == '1') {
        navBar.classList.add('active')
        document.querySelector('#username').textContent = temp[1]
        loadMyCart();
    }
}

//  Pagination
pageNum.forEach(page => {
    page.addEventListener('click', (e) => {
        let temp = parseInt(e.currentTarget.innerText);
        createPage(temp);
        currentPage = temp;
    });
});

prevPage.addEventListener('click', () => {
    if (currentPage <= 1)
        currentPage = 4;
    else
        currentPage--;
    createPage(currentPage)
});

nextPage.addEventListener('click', () => {
    if (currentPage >= 4)
        currentPage = 1;
    else
        currentPage++;
    createPage(currentPage)
});

function createPage(pageIdx) {
    pageNum.forEach(innerPage => {
        innerPage.classList.remove('active');
    });

    productContainer.innerHTML = '';

    switch (pageIdx) {
        case 1:
            getProductDesc(page1);
            break;

        case 2:
            getProductDesc(page2);
            break;

        case 3:
            getProductDesc(page1);
            break;

        case 4:
            getProductDesc(page2);
            break;
    }

    pageNum[pageIdx - 1].classList.add('active');
    setTimeout(() => {
        window.location.href = "./index.html#l-product";
    }, 100)
}

function updateSize() {
    img_width = featuredContainer.clientWidth;
    img_height = featuredContainer.clientHeight;

    slides.forEach(slide => {
        slide.style.width = `${img_width}px`;
        slide.style.height = `${img_height}px`;
    });

    sliderContainer.style.width = `${slides.length * img_width}px`;
    sliderContainer.style.height = `${img_height}px`;
}

window.addEventListener('resize', updateSize);

function nextSlide() {
    updateSize();
    if (slideIdx < slides.length - 1)
        slideIdx++;
    else
        slideIdx = 0;
    slideTransform();
}

function prevSlide() {
    updateSize();
    if (slideIdx === 0)
        slideIdx = slides.length - 1;
    else
        slideIdx--;
    slideTransform();
}

function slideTransform() {
    sliderContainer.style.transform = `translateX(-${slideIdx * img_width}px)`;
}

btnNextSlide.addEventListener('click', () => {
    nextSlide();
});

btnPrevSlide.addEventListener('click', () => {
    prevSlide();
});

setInterval(() => {
    nextSlide();
}, 4000);

function loadMyCart() {
    let items = Object.keys(localStorage)

    if (items.length > 0) {
        myCart.classList.replace('no-items', 'have-items')

        let cartItemsLen = 0;
        for (item of items)
            if (item != 'login' && item != 'signup')
                cartItemsLen++;

        cartAmount.textContent = cartItemsLen;
    }

    for (i of items)
        if (i == 'login' || i == 'signup')
            continue;
        else
            cartItem.prepend(createMyCartItem(i))
}

function createMyCartItem(idx) {
    let li = document.createElement('li');
    let items = localStorage.getItem(idx).split(';');

    li.innerHTML =
        `<img src="./img/products/Gaming-laptop/${idx.split('-')[1]}/${items[2].trim()}" alt="" />
        <span id="cart-item_name">${items[0]}<span id="cart-item_quan">x${items[1]}</span></span>
        <i class="fas fa-times my-cart-remove"></i>`
    return li;
}

myCart.addEventListener('click', () => {
    if (navBar.classList.contains('active'))
        window.location.href = "./myCart.html"
    else
        window.location.href = "./login.html"
})