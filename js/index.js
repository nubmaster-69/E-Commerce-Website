const page1 = [
    {
        id: 1,
        name: 'MSI GE66 10SF',
        price: '$ 2,600',
        img: './img/products/list/1.png'
    },
    {
        id: 2,
        name: 'MSI Creator Series',
        price: '$ 1,521',
        img: './img/products/list/2.png'
    },
    {
        id: 3,
        name: 'MSI GL75 Leopard',
        price: '$ 996',
        img: './img/products/list/3.png'
    },
    {
        id: 4,
        name: 'ASUS TUF A15',
        price: '$ 899',
        img: './img/products/list/4.png'
    },
    {
        id: 5,
        name: 'Acer Nitro 5',
        price: '$ 696',
        img: './img/products/list/5.png'
    },
    {
        id: 6,
        name: 'MSI GE66 Raider',
        price: '$ 2,199',
        img: './img/products/list/6.png'
    },
    {
        id: 7,
        name: 'Razer Blade',
        price: '$ 1,599',
        img: './img/products/list/7.png'
    },
    {
        id: 8,
        name: 'Acer Predator Helios',
        price: '$ 1,199',
        img: './img/products/list/8.png'
    },
    {
        id: 9,
        name: 'ASUS RoG Strix G17',
        price: '$ 1,599',
        img: './img/products/list/9.png'
    },
    {
        id: 10,
        name: 'MSI GF65 Thin',
        price: '$ 1,399',
        img: './img/products/list/10.png'
    },
    {
        id: 11,
        name: 'MSI GS66 Stealth',
        price: '$ 2,399',
        img: './img/products/list/11.png'
    },
    {
        id: 12,
        name: 'ASUS RoG Zephyrus',
        price: '$ 1,269',
        img: './img/products/list/12.png'
    }
];

const page2 = [
    {
        id: 13,
        name: 'MSI Prestige 14',
        price: '$ 1400',
        img: './img/products/list/13.png'
    },
    {
        id: 14,
        name: 'MSI WS75 Series',
        price: '$ 3,400',
        img: './img/products/list/14.png'
    },
    {
        id: 15,
        name: 'MSI Prestige 15',
        price: '$ 1,700',
        img: './img/products/list/15.png'
    },
    {
        id: 16,
        name: 'MSI GE63 Raider',
        price: '$ 1,300',
        img: './img/products/list/16.png'
    },
    {
        id: 17,
        name: 'MSI Prestige 14',
        price: '$ 1,049',
        img: './img/products/list/17.png'
    },
    {
        id: 18,
        name: 'MSI Summit E13',
        price: '$ 1,449',
        img: './img/products/list/18.png'
    },
    {
        id: 19,
        name: 'MSI Modern 14B',
        price: '$ 549',
        img: './img/products/list/19.png'
    },
    {
        id: 20,
        name: 'MSI Modern 14B',
        price: '$ 549',
        img: './img/products/list/20.png'
    },
    {
        id: 21,
        name: 'MSI Summit B15',
        price: '$ 890',
        img: './img/products/list/21.png'
    },
    {
        id: 22,
        name: 'MSI 14" Prestige 14',
        price: '$ 1,079',
        img: './img/products/list/22.png'
    },
    {
        id: 23,
        name: 'MSI Creator Series',
        price: '$ 870',
        img: './img/products/list/23.png'
    },
    {
        id: 24,
        name: 'MSI Prestige 15',
        price: '$ 1,770',
        img: './img/products/list/24.png'
    }
];

const menuToggler = $('.menu-toggler')
const navLinks = $('.nav-links')
const productContainer = document.querySelector('.product-list');
const pageNum = document.querySelectorAll('.page-num');
const prevPage = document.querySelector('.page-prev');
const nextPage = document.querySelector('.page-next');
const showcaseImage = document.getElementById('showcase-img');
const slideImages = document.querySelectorAll('.slide-img');
const navBar = document.querySelector('.nav-bar');
const myAccount = document.querySelector('#my-account');
const contact = document.querySelectorAll('.contact');
const cartAmount = document.querySelector('#cart-amount');
const closePopupMsgBtns = document.querySelectorAll(".close");
const sliderContainer = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide')
const btnNextSlide = document.querySelector('#nextSlide');
const btnPrevSlide = document.querySelector('#prevSlide');

const myCart = document.querySelector('#my-cart');
const cartItem = document.querySelector('#mycart-item')

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

closePopupMsgBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.currentTarget.parentElement.style.display = 'none'
    })
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
    window.onload = getProductDesc(page1);
    window.onload = loadMyCart();
})

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
        cartAmount.textContent = items.length
    }

    for (i of items)
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
    window.location.href = "./myCart.html"
})