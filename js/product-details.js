const menuToggler = document.querySelector('.menu-toggler');
const navLinks = document.querySelector('.nav-links');
const showCase = document.querySelector('.showcase');
const content = document.querySelector('.content');
const moreDetail = document.querySelector('#more-detail');

var mainImgSlide;
var imgSlide;
var btnIncrease;
var btnDecrease;
var quantity;
var curQuantity = 1;

const products = [
    {
        id: 1,
        showCaseImgs: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg"
        ],
        productName: 'MSI GE66 DragonShield 10SF 483VN',
        rate: 4.9,
        reviews: 75,
        sold: 129,
        screen: '15.6" 1920 x 1080',
        processor: 'Intel Core i7-10875H 2.3GHz - 5.1GHz 16MB',
        memory: '6GB (8GB x2) DDR4 2666MHz',
        hardDrive: '1TB SSD PCIe G3X4 (2 Slots)',
        oldPrice: '$2,700',
        newPrice: '$2,600',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum"
    },
    {
        id: 2,
        showCaseImgs: [
            "1.png",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.png"
        ],
        productName: 'MSI 15.6" Creator Series Creator 15 Multi-Touch',
        rate: 4.7,
        reviews: 71,
        sold: 93,
        screen: '15.6" 1920 x 1080',
        processor: 'Intel Core i7-10875H 2.3GHz - 5.1GHz 16MB',
        memory: '6GB (8GB x2) DDR4 2666MHz',
        hardDrive: '1TB SSD PCIe G3X4 (2 Slots)',
        oldPrice: '$1,599',
        newPrice: '$1,399',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum"
    },
    {
        id: 3,
        showCaseImgs: [
            "1.png",
            "2.jpg",
            "3.jpg",
            "4.png",
            "5.png"
        ],
        productName: 'MSI GL75 Leopard',
        rate: 4.5,
        reviews: 23,
        sold: 61,
        screen: '15.6" 1920 x 1080',
        processor: 'Intel Core i7-10875H 2.3GHz - 5.1GHz 16MB',
        memory: '6GB (8GB x2) DDR4 2666MHz',
        hardDrive: '1TB SSD PCIe G3X4 (2 Slots)',
        oldPrice: '$1,599',
        newPrice: '$1,399',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum"
    },
    {
        id: 4,
        showCaseImgs: [
            "1.png",
            "2.jpg",
            "3.jpg",
            "4.png",
            "5.jpg"
        ],
        productName: 'ASUS TUF A15',
        rate: 4.6,
        reviews: 37,
        sold: 55,
        screen: '15.6" 1920 x 1080',
        processor: 'Intel Core i7-10875H 2.3GHz - 5.1GHz 16MB',
        memory: '6GB (8GB x2) DDR4 2666MHz',
        hardDrive: '1TB SSD PCIe G3X4 (2 Slots)',
        oldPrice: '$1,599',
        newPrice: '$1,399',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum"
    },
    {
        id: 5,
        showCaseImgs: [
            "1.png",
            "2.jpg",
            "3.png",
            "4.jpg",
            "5.png"
        ],
        productName: 'Acer Nitro 5',
        rate: 4.7,
        reviews: 43,
        sold: 64,
        screen: '15.6" 1920 x 1080',
        processor: 'Intel Core i7-10875H 2.3GHz - 5.1GHz 16MB',
        memory: '6GB (8GB x2) DDR4 2666MHz',
        hardDrive: '1TB SSD PCIe G3X4 (2 Slots)',
        oldPrice: '$800',
        newPrice: '$696',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum"
    },
    {
        id: 6,
        showCaseImgs: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg"
        ],
        productName: 'MSI GE Series GE66 Raider Gaming Laptop',
        rate: 4.5,
        reviews: 21,
        sold: 43,
        screen: '15.6" 1920 x 1080',
        processor: 'Intel Core i7-10875H 2.2GHz - 5.1GHz 16MB',
        memory: '8GB (8GB x2) DDR4 2666MHz',
        hardDrive: '1TB SSD PCIe G3X4 (2 Slots)',
        oldPrice: '$2,399',
        newPrice: '$2,199',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum"
    },
    {
        id: 7,
        showCaseImgs: [
            "1.png",
            "2.jpg",
            "3.jpg",
            "4.png",
            "5.png"
        ],
        productName: 'Razer Blade Gaming Laptop',
        rate: 4.6,
        reviews: 14,
        sold: 22,
        screen: '15.6" 1920 x 1080 (or 2560 x 1440)',
        processor: 'Intel Core i7-10750H Six-Core 2.6GHz',
        memory: '6GB GDDR6 VRAM',
        hardDrive: '1TB SSD PCIe G3X4 (2 Slots)',
        oldPrice: '$1,799',
        newPrice: '$1,699',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum"
    },
    {
        id: 8,
        showCaseImgs: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.png"
        ],
        productName: 'Acer Predator Helios 300 Gaming Laptop',
        rate: 4.8,
        reviews: 17,
        sold: 31,
        screen: '15.6" 1920 x 1080',
        processor: 'Intel Core i7-10750H six-core 2.6GHz',
        memory: '16GB of DDR4',
        hardDrive: '1TB SSD',
        oldPrice: '$1,399',
        newPrice: '$1,199',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum"
    },
    {
        id: 9,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png"
        ],
        productName: 'ASUS Republic of Gamers Strix G17 Gaming Laptop',
        rate: 4.9,
        reviews: 51,
        sold: 72,
        screen: '17.3" 1920 x 1080 IPS Display',
        processor: 'Ryzen 9 5900HX 8-Core 3.3GHz',
        memory: '16GB DDR4',
        hardDrive: '1TB M.2 PCIe SSD',
        oldPrice: '$ 1,799',
        newPrice: '$ 1,599',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum"
    },
    {
        id: 10,
        showCaseImgs: [
            "1.jpg",
            "2.png",
            "3.jpg",
            "4.jpg",
            "5.png"
        ],
        productName: 'MSI GF65 Thin 10UE-046 Gaming Laptop',
        rate: 4.7,
        reviews: 31,
        sold: 46,
        screen: '15.6" 1920 x 1080 144Hz IPS Display',
        processor: '2.6 GHz Intel Core i7 6-Core (10th Gen)',
        memory: '16GB DDR4 RAM',
        hardDrive: '1TB M.2 NVMe PCIe SSD',
        oldPrice: '$ 1,599',
        newPrice: '$ 1,399',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum"
    },
    {
        id: 11,
        showCaseImgs: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.png",
            "5.png"
        ],
        productName: 'MSI GS66 Stealth Gaming Laptop (Core Black)',
        rate: 4.8,
        reviews: 22,
        sold: 37,
        screen: '15.6" FHD 1920 x 1080 300 Hz Display',
        processor: '2.2 GHz Intel Core i7 8-Core 10th Gen',
        memory: '32GB DDR4',
        hardDrive: '1TB NVMe PCIe M.2 SSD',
        oldPrice: '$ 2,500',
        newPrice: '$ 2,399',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum"
    },
    {
        id: 12,
        showCaseImgs: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg"
        ],
        productName: 'ASUS RoG Zephyrus G15 GA502IU Gaming Laptop',
        rate: 4.8,
        reviews: 43,
        sold: 44,
        screen: '15.6" 1920 x 1080 144 Hz IPS Display',
        processor: '2.9 GHz AMD Ryzen 7 4800HS Eight-Core',
        memory: '16GB DDR4',
        hardDrive: '1TB NVMe PCIe M.2 SSD',
        oldPrice: '$ 1,100',
        newPrice: '$ 1,269',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum"
    }
];

var loadProductDetail = () => {
    let curProductID = new URLSearchParams(window.location.search).get('product');
    showCase.append(createShowCase(curProductID));
    content.append(createContent(curProductID));
    moreDetail.append(createMoreDetail(curProductID));

    mainImgSlide = document.querySelectorAll('.main-img');
    imgSlide = document.querySelectorAll('.img-slide');
    btnIncrease = document.querySelector('.btn-increase');
    btnDecrease = document.querySelector('.btn-decrease');
    quantity = document.querySelector('#quantity');
}

// loadProductDetail();
function createShowCase(idx) {
    let showCaseDiv = document.createElement('div');
    showCaseDiv.innerHTML =
        `
            <div class="showcase__img">
                <img class="main-img active-slide" src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][0]}" alt="">
                <img class="main-img" src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][1]}" alt="">
                <img class="main-img" src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][2]}" alt="">
                <img class="main-img" src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][3]}" alt="">
                <img class="main-img" src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][4]}" alt="">
            </div>

            <div class="showcase__img--slider">
                <img class="img-slide" id="1" src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][0]}" alt="">
                <img class="img-slide" id="2" src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][1]}" alt="">
                <img class="img-slide" id="3" src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][2]}" alt="">
                <img class="img-slide" id="4" src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][3]}" alt="">
                <img class="img-slide" id="5" src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][4]}" alt="">
            </div>
        `

    return showCaseDiv;
}

function createContent(idx) {
    let contentDiv = document.createElement('div');

    contentDiv.innerHTML =
        `
        <div class="product__name">${products[idx - 1]['productName']}</div>

        <div class="product__rating">
            <span class="rate">
                <span id="total-rate">${products[idx - 1]['rate']}</span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </span>

            <span class="review">
                <span id="review-amount">${products[idx - 1]['reviews']}</span> Reviews
            </span>

            <span class="sold">
                <span id="sold-amount">${products[idx - 1]['sold']}</span> Sold
            </span>
        </div>

        <div class="product__desc">

            <div class="overview">
                <h3>Features:</h3>

                <ul class="details">
                    <li>
                        <i class="fas fa-laptop-code"></i>
                        <span title="Screen">${products[idx - 1]['screen']}</span>
                    </li>

                    <li>
                        <i class="fas fa-microchip"></i>
                        <span title="Processor">${products[idx - 1]['processor']}</span>
                    </li>

                    <li>
                        <i class="fas fa-memory"></i>
                        <span title="Memory">${products[idx - 1]['memory']}</span>
                    </li>

                    <li>
                        <i class="fas fa-hdd"></i>
                        <span title="Hard Drive">${products[idx - 1]['hardDrive']}</span>
                    </li>
                </ul>
            </div>

            <a href="#spec" class="btn-overview">More Detail</a>
        </div>

        <div class="product__price">
            <div class="old-price">
                Old price: <span id="old-price">${products[idx - 1]['oldPrice']}</span>
            </div>

            <div class="new-price">
                New price: <span id="new-price">${products[idx - 1]['newPrice']}</span>
            </div>
        </div>

        <div class="payment">
            <span class="quantity-info">
                <button disabled class="btnFunction btn-decrease">
                    <i class="fas fa-minus"></i>
                </button>
                <input type="text" id="quantity" value="1" minlength="1" maxlength="2">
                <button class="btnFunction btn-increase">
                    <i class="fas fa-plus"></i>
                </button>
            </span>

            <span class="payment-btn">
                <button type="submit" class="btn btn-to-cart">add to cart
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button type="submit" class="btn btn-buy">buy now</button>
            </span>
        </div>

        <div class="share">
            <span class="share-title">Share to:</span>
            <span class="social-media">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
            </span>
        </div>
    `

    return contentDiv;
}

function createMoreDetail(idx) {
    let detailDiv = document.createElement('div');

    detailDiv.innerHTML =
        `
    <h3>About This Product:</h3>
    <p>${products[idx - 1]['aboutProduct']}</p>
    `
    return detailDiv;
}

window.onload = loadProductDetail();

imgSlide.forEach(img => {
    img.addEventListener('click', (e) => {
        mainImgSlide.forEach(mainImg => {
            mainImg.classList.remove('active-slide');
        });
        mainImgSlide[e.currentTarget.id - 1].classList.add('active-slide');
    })
})

let quantityChange = () => {
    if (curQuantity >= 99)
        btnIncrease.disabled = true;
    else if (curQuantity < 2)
        btnDecrease.disabled = true;
    else {
        btnIncrease.disabled = false;
        btnDecrease.disabled = false;
    }
    quantity.value = curQuantity;
}

btnIncrease.addEventListener('click', () => {
    if (curQuantity <= 99)
        curQuantity++;
    else
        curQuantity = 99;
    quantityChange();
});

btnDecrease.addEventListener('click', () => {
    if (curQuantity > 1)
        curQuantity--;
    else
        curQuantity = 1;
    quantity.value = curQuantity;
    quantityChange();
});


// Menu toggle 
menuToggler.addEventListener('click', () => {
    navLinks.classList.toggle('menu-active');
    menuToggler.classList.toggle('menu-close');
});

// Sticky navbar after scroll
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});