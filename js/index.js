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
        name: 'Acer Nitro 5',
        price: '$ 696',
        img: './img/products/list/13.png'
    },
    {
        id: 14,
        name: 'Acer Concept 3 Ezel',
        price: '$ 1,692',
        img: './img/products/list/14.png'
    },
    {
        id: 15,
        name: 'Acer Aspire 3 Series',
        price: '$ 549',
        img: './img/products/list/15.png'
    },
    {
        id: 16,
        name: 'Acer Aspire 3 Series',
        price: '$ 800',
        img: './img/products/list/16.png'
    },
];

const menuToggler = document.querySelector('.menu-toggler');
const navLinks = document.querySelector('.nav-links');
const productContainer = document.querySelector('.product-list');
var products;
var toFavList;
const pageNum = document.querySelectorAll('.page-num');
const prevPage = document.querySelector('.page-prev');
const nextPage = document.querySelector('.page-next');
const showcaseImage = document.getElementById('showcase-img');
const slideImages = document.querySelectorAll('.slide-img');

const contact = document.querySelector('.contact');

var currentPage = 1;

// Uncomment this function only when needed
// let idx = 0, imagesLength = slideImages.length;
// setInterval(function autoSlide() {
//     idx++;
//     idx = (idx >= imagesLength ? 0 : idx);
//     changeColorAndImg(slideImages[idx].getAttribute('src'), slideImages[idx].getAttribute('alt'));
// }, 3500);


// Menu toggle
menuToggler.addEventListener('click', () => {
    navLinks.classList.toggle('menu-active');
    menuToggler.classList.toggle('menu-close');
});


// Sticky navbar after scroll
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('sticky', window.scrollY > 0);
});

// Sticky contact button
window.addEventListener('scroll', () => {
    contact.classList.toggle('active', window.scrollY > 200);
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
        <i class="far fa-heart to-fav-list"></i>
        <span class="price">${idx.price}</span>
        <i class="fas fa-cart-plus add-to-cart"></i>
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

window.onload = getProductDesc(page1);

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
    // window.location.href = "./index.html#l-product";
}