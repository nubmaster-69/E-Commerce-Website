const menuToggler = $('.menu-toggler');
const navLinks = $('.nav-links');
const showCase = document.querySelector('.showcase');
const content = document.querySelector('.content');
const moreDetail = document.querySelector('#more-detail');
const specs = document.querySelector('#spec');
const myCart = document.querySelector('#my-cart');
const cartItem = document.querySelector('#mycart-item')
const cartAmount = document.querySelector('#cart-amount')

var mainImgSlide;
var imgSlide;
var btnIncrease;
var btnDecrease;
var btnToCart;
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
            "5.jpg",
            "6.jpg",
            "7.jpeg",
            "8.jpeg",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI GE66 DragonShield 10SF 483VN',
        brand: 'MSI',
        rate: 4.9,
        reviews: 75,
        sold: 129,
        screen: '15.6" FHD (1920 x 1080)',
        processor: 'Intel® Core™ i7-10875H 2.30GHz - 5.10GHz 8 Cores 12 Threads',
        memory: '16GB (8GB x2) DDR4 3200MHz',
        hardDrive: '1 TB NVMe PCIe Gen3x4',
        oldPrice: '$2,700',
        newPrice: '$2,600',
        gpu: 'NVIDIA GeForce GTX 1650 4GB GDDR6 + Intel UHD Graphics',
        connection: 'Killer ax Wi-Fi + Bluetooth v5.1',
        keyBoard: 'RGB Steelseries',
        weight: '2.38Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'
    },
    {
        id: 2,
        showCaseImgs: [
            "1.png",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.png",
            "8.jpg",
            "10.jpg",
            "11.jpg",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 15.6" Creator Series Creator 15 Multi-Touch',
        brand: 'MSI',
        rate: 4.7,
        reviews: 71,
        sold: 92,
        screen: 'LCD 15.6" FHD (1920 x 1080) TouchScreen',
        processor: 'Intel Core i7-10875H 2.3GHz-5.1GHz 8-Core',
        memory: '16GB (8GB x2) DDR4 2666MH (maximum 64GB)',
        hardDrive: '512 GB M.2 NVMe PCIe',
        oldPrice: '$1,599',
        newPrice: '$1,399',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum",
        gpu: 'NVIDIA GeForce RTX 2060 with 6 GB GDDR6 VRAM',
        connection: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.1',
        keyBoard: '84-Key Notebook Backlight',
        weight: '2.1Kg',
        battery: 'Li-Ion 4-Cell 99.9 Wh'
    },
    {
        id: 3,
        showCaseImgs: [
            "1.png",
            "2.jpg",
            "3.jpg",
            "4.png",
            "5.png",
            "10.jpg",
            "8.jpg",
            "9.jpg",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI GL75 Leopard',
        brand: 'MSI',
        rate: 4.5,
        reviews: 23,
        sold: 61,
        screen: 'IPS 15.6" FHD (1920 x 1080)',
        processor: 'Intel Core i7-10750H 2.6GHz-5.0GHz 6-Core',
        memory: '16GB (8GB x2) DDR4 2666MH (maximum 64GB)',
        hardDrive: '512 GB M.2 NVMe PCIe',
        oldPrice: '$1,599',
        newPrice: '$1,399',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum",
        gpu: 'NVIDIA GeForce GTX 1660 Ti with 6 GB GDDR6 VRAM',
        connection: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.1',
        keyBoard: 'Notebook Keyboard with Backlight, Number Pad',
        weight: '2.3Kg',
        battery: 'Lithium-Ion 6-Cell: 51 Wh'
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
        brand: 'ASUS',
        rate: 4.6,
        reviews: 37,
        sold: 55,
        screen: 'IPS 15.6" FHD (1920 x 1080)',
        processor: 'AMD Ryzen 7 4800H 2.9GHz-4.2GHz 8-Core',
        memory: '16GB (8GB x2) DDR4 3200MHz (maximum 32GB)',
        hardDrive: '512 GB M.2 NVMe PCIe',
        oldPrice: '$1,599',
        newPrice: '$1,399',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum",
        gpu: 'NVIDIA GeForce GTX 1650 Ti with 4 GB GDDR6 VRAM',
        connection: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.1',
        keyBoard: 'Notebook Keyboard with Backlight',
        weight: '2.3Kg',
        battery: 'Lithium-Ion 3-Cell: 48 Wh'
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
        brand: 'Acer',
        rate: 4.7,
        reviews: 43,
        sold: 64,
        screen: 'IPS-Type LCD 15.6" FHD (1920 x 1080)',
        processor: 'Intel Core i5-9300H 2.4GHz - 4.1GHz Quad-Core',
        memory: '8GB DDR4 3200MHz (maximum 32GB)',
        hardDrive: '512 GB M.2 NVMe PCIe',
        oldPrice: '$800',
        newPrice: '$696',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum",
        gpu: 'NVIDIA GeForce GTX 1650 with 4 GB GDDR5 VRAM',
        connection: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.1',
        keyBoard: 'Notebook Keyboard with Backlight, Number Pad',
        weight: '2.5Kg',
        battery: 'Lithium-Ion 4-Cell: 55 Wh'
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
        brand: 'MSI',
        rate: 4.5,
        reviews: 21,
        sold: 43,
        screen: 'LCD 15.6" FHD (1920 x 1080)',
        processor: ' Intel Core i7-10870H 2.2GHz - 5.0GHz 8-Core',
        memory: '32GB (16GBx2) DDR4 3200MHz',
        hardDrive: '1TB M.2 NVMe PCIe',
        oldPrice: '$2,399',
        newPrice: '$2,199',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum",
        gpu: 'NVIDIA GeForce RTX 3080 with 16 GB GDDR6 VRAM',
        connection: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.1',
        keyBoard: 'Notebook Keyboard with Backlight',
        weight: '2.3Kg',
        battery: 'Lithium-Ion 4-Cell 99 Wh'
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
        brand: 'Razer',
        rate: 4.6,
        reviews: 14,
        sold: 22,
        screen: 'LCD 15.6" FHD (1920 x 1080)',
        processor: 'Intel Core i7-10750H 6-Core 2.6GHz - 5.0GHz',
        memory: '16GB (8GBx2) DDR4 2933MHz',
        hardDrive: '512GB M.2 NVMe PCIe',
        oldPrice: '$1,799',
        newPrice: '$1,699',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum",
        gpu: 'NVIDIA GeForce RTX 3060 with 6 GB GDDR6 VRAM',
        connection: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.1',
        keyBoard: 'Notebook Keyboard with Backlight',
        weight: '2Kg',
        battery: 'Lithium-Ion 4-Cell 65 Wh'
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
        brand: 'Acer',
        rate: 4.8,
        reviews: 17,
        sold: 31,
        screen: 'IPS 15.6" FHD (1920 x 1080)',
        processor: 'Intel Core i7-10750H 6-Core 2.6GHz - 5.0GHz',
        memory: '16GB (8GBx2) DDR4 2933MHz',
        hardDrive: '1TB M.2 NVMe PCIe',
        oldPrice: '$1,399',
        newPrice: '$1,199',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum",
        gpu: 'NVIDIA GeForce RTX 3060 with 6 GB GDDR6 VRAM',
        connection: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.1',
        keyBoard: 'Notebook Keyboard with Backlight',
        weight: '2.5Kg',
        battery: 'Lithium-Ion 4-Cell 65 Wh'
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
        brand: 'ASUS',
        rate: 4.9,
        reviews: 51,
        sold: 72,
        screen: 'IPS-Type LCD 17.3" FHD (1920 x 1080)',
        processor: 'AMD Ryzen 9 5900HX 3.3GHz - 4.6GHz 8-Core',
        memory: '32GB (16GBx2) DDR4 3200MHz',
        hardDrive: '1TB M.2 NVMe PCIe',
        oldPrice: '$ 1,799',
        newPrice: '$ 1,599',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum",
        gpu: 'NVIDIA GeForce RTX 3070 with 8 GB GDDR6 VRAM',
        connection: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.1',
        keyBoard: 'Chiclet Notebook Keyboard with Backlight',
        weight: '2.7Kg',
        battery: 'Lithium-Ion 4-Cell 90 Wh'
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
        brand: 'MSI',
        rate: 4.7,
        reviews: 31,
        sold: 46,
        screen: 'IPS-Type LCD 15.6" FHD (1920 x 1080)',
        processor: 'Intel Core i7-10750H 6-Core 2.6GHz - 5GHz',
        memory: '16GB (8GBx2) DDR4 3200MHz',
        hardDrive: '1TB M.2 NVMe PCIe',
        oldPrice: '$ 1,599',
        newPrice: '$ 1,399',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum",
        gpu: 'NVIDIA GeForce RTX 3060 with 6 GB GDDR6 VRAM',
        connection: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.1',
        keyBoard: 'Notebook Keyboard with Backlight',
        weight: '1.9Kg',
        battery: 'Lithium-Ion 3-Cell 51 Wh'
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
        brand: 'MSI',
        rate: 4.8,
        reviews: 22,
        sold: 37,
        screen: 'LCD 15.6" FHD (1920 x 1080)',
        processor: 'Intel Core i7-10870H 8-Core 2.2GHz - 5GHz',
        memory: '32GB (16GBx2) DDR4 3200MHz',
        hardDrive: '1TB M.2 NVMe PCIe',
        oldPrice: '$ 2,500',
        newPrice: '$ 2,399',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum",
        gpu: 'NVIDIA GeForce RTX 3070 Max-Q with 8 GB GDDR6 VRAM',
        connection: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.1',
        keyBoard: 'Notebook Keyboard with Backlight',
        weight: '2.1Kg',
        battery: 'Lithium-Ion Polymer (LiPo) 4-Cell 100 Wh'
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
        brand: 'ASUS',
        rate: 4.8,
        reviews: 43,
        sold: 44,
        screen: 'IPS-Type LCD 15.6" FHD (1920 x 1080)',
        processor: 'AMD Ryzen 7 4800HS 2.9GHz - 4.2GHz 8-Core',
        memory: '16GB (8GBx2) DDR4 3200MHz',
        hardDrive: '1TB M.2 NVMe PCIe',
        oldPrice: '$ 1,100',
        newPrice: '$ 1,269',
        aboutProduct: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harumLorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum",
        gpu: 'NVIDIA GeForce GTX 1660 Ti Max-Q with 6 GB GDDR6 VRAM',
        connection: 'Wi-Fi 6 (802.11ax) + Bluetooth 5.1',
        keyBoard: 'Chiclet Notebook Keyboard with Backlight',
        weight: '2.1Kg',
        battery: 'Lithium-Ion 4-Cell 76 Wh'
    },
    {
        id: 13,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "a.png",
            "a.png",
            "a.png",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 14" Prestige 14 Laptop (Rose Pink)',
        brand: 'MSI',
        rate: 4.8,
        reviews: 70,
        sold: 120,
        screen: '14" 1920 x 1080 IPS Display',
        processor: 'Intel Core i7 4-Core (11th Gen) 1.2GHz',
        memory: '16GB (8GB x2) DDR4 3200MHz',
        hardDrive: '1TB M.2 SSD',
        oldPrice: '$1,549',
        newPrice: '$1,400',
        gpu: 'NVIDIA GTX 1650 Max-Q',
        connection: 'Bluetooth 5.1 and Wi-Fi 6',
        keyBoard: 'Backlight',
        weight: '2.5Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'
    },
    {
        id: 14,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "a.png",
            "a.png",
            "a.png",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 17.3" WS75 Series Mobile Workstation',
        brand: 'MSI',
        rate: 4.5,
        reviews: 56,
        sold: 90,
        screen: '17.3" 1920 x 1080 Full HD IPS Display',
        processor: '2.4 GHz Intel Core i9- 10980HK Eight - Core',
        memory: '64GB DDR4 RAM',
        hardDrive: '1TB NVMe PCIe M.2 SSD',
        oldPrice: '$3,549',
        newPrice: '$3,400',
        gpu: 'NVIDIA Quadro RTX 5000(16GB GDDR6)',
        connection: 'Wi - Fi 6(802.11ax) | Bluetooth 5.1',
        keyBoard: 'Backlight',
        weight: '2.7Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'
    },
    {
        id: 15,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "a.png",
            "a.png",
            "a.png",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 15.6" Prestige 15 Laptop (Urban Silver)',
        brand: 'MSI',
        rate: 4.4,
        reviews: 72,
        sold: 35,
        screen: '15.6" 3840 x 2160 Display',
        processor: '1.2 GHz Intel Core i7 4-Core (11th Gen)',
        memory: '32GB of DDR4',
        hardDrive: '1TB M.2 SSD',
        oldPrice: '$1,799',
        newPrice: '$1,700',
        gpu: 'NVIDIA GeForce GTX 1650 Max - Q',
        connection: 'Bluetooth 5.1 and Wi- Fi 6',
        keyBoard: 'Backlit Keyboard',
        weight: '2.3Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'

    },
    {
        id: 16,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "a.png",
            "a.png",
            "a.png",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 15.6" GE63 Raider RGB Gaming Laptop',
        brand: 'MSI',
        rate: 5.0,
        reviews: 140,
        sold: 95,
        screen: '15.6" 1920 x 1080 144 Hz IPS Display',
        processor: '2.6 GHz Intel Core i7- 9750H Six - Core',
        memory: '32GB DDR4',
        hardDrive: ' 512GB NVMe SSD + 1TB HDD',
        oldPrice: '$1,399',
        newPrice: '$1,300',
        gpu: 'NVIDIA GeForce RTX 2060(6GB GDDR6)',
        connection: 'Bluetooth 5.1 and Wi - Fi 5(802.11ac) ',
        keyBoard: ' MSI Mystic Light RGB Lighting',
        weight: '2.8Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'
    },
    {
        id: 17,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "a.png",
            "a.png",
            "a.png",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 14" Prestige 14 EVO Laptop',
        brand: 'MSI',
        rate: 4.0,
        reviews: 45,
        sold: 72,
        screen: '14" FHD 1920 x 1080 IPS Display',
        processor: '1.2 GHz Intel Core i7 Quad- Core 11th Gen',
        memory: '16 GB LPDDR4X',
        hardDrive: '512GB NVMe SSD',
        oldPrice: '$1,149',
        newPrice: '$1,049',
        gpu: 'NVIDIA GeForce GTX 1650 Max-Q',
        connection: 'Wi - Fi 6(802.11ax) | Bluetooth 5.1',
        keyBoard: 'Thunderbolt 4 | USB Type-A',
        weight: '2.6Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'

    },
    {
        id: 18,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "a.png",
            "a.png",
            "a.png",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 13.4 "Summit E13FlipEvo (Ink Black)',
        brand: 'MSI',
        rate: 4.2,
        reviews: 40,
        sold: 72,
        screen: '13, 4 "FHD 1920 x 1200',
        processor: '1, 2 GHz Intel Core i7 Quad- Core 11th Gen',
        memory: ' 16 GB LPDDR4X',
        hardDrive: ' 512GB  SSD M.2',
        oldPrice: '$1,549',
        newPrice: '$1,449',
        gpu: 'NVIDIA GeForce GTX 1650 Max-Q',
        connection: 'Wi - Fi 6(802.11ax) | Bluetooth 5.2',
        keyBoard: 'Thunderbolt 4 | USB Type-C',
        weight: '2.8Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'
    },
    {
        id: 19,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "a.png",
            "a.png",
            "a.png",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 14" Modern 14B Notebook (Beige Mousse)',
        brand: 'MSI',
        rate: 4.8,
        reviews: 49,
        sold: 90,
        screen: '14" 1920 x 1080 FHD IPS Display',
        processor: '3.0 GHz Intel Core i3 2-Core(11th Gen)',
        memory: '8GB of DDR4 RAM ',
        hardDrive: ' 512GB  SSD ',
        oldPrice: '$649',
        newPrice: '$549',
        gpu: 'Intel Iris Xe Graphics',
        connection: 'Wi - Fi 6(802.11ax) | Bluetooth 5.2',
        keyBoard: 'Thunderbolt 4 | USB Type-C',
        weight: '2.2Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'
    },
    {
        id: 20,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "a.png",
            "a.png",
            "a.png",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 14" Modern 14B Notebook (Beige Mousse)',
        brand: 'MSI',
        rate: 4.8,
        reviews: 49,
        sold: 90,
        screen: '14" 1920 x 1080 FHD IPS Display',
        processor: '3.0 GHz Intel Core i3 2-Core(11th Gen)',
        memory: '8GB of DDR4 RAM ',
        hardDrive: ' 512GB  SSD ',
        oldPrice: '$649',
        newPrice: '$549',
        gpu: 'Intel Iris Xe Graphics',
        connection: 'Wi - Fi 6(802.11ax) | Bluetooth 5.2',
        keyBoard: 'Thunderbolt 4 | USB Type-C',
        weight: '2.2Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'
    },
    {
        id: 21,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "a.png",
            "a.png",
            "a.png",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 15.6" Summit B15 Laptop',
        brand: 'MSI',
        rate: 4.8,
        reviews: 79,
        sold: 49,
        screen: '14" 1920 x 1080 FHD IPS Display',
        processor: '1.6 GHz Intel Core i5- 10210U Quad - Core',
        memory: '8GB of DDR4 RAM ',
        hardDrive: ' 512GB  SSD ',
        oldPrice: '$990',
        newPrice: '$890',
        gpu: 'NVIDIA GeForce GTX 1650 Max - Q',
        connection: 'Wi - Fi 6(802.11ax) | Bluetooth 5.2',
        keyBoard: 'Backlit Keyboard',
        weight: '2.5Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'
    },
    {
        id: 22,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "a.png",
            "a.png",
            "a.png",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 14" Prestige 14 Laptop',
        brand: 'MSI',
        rate: 4.7,
        reviews: 20,
        sold: 12,
        screen: '14" 1920 x 1080 Full HD IPS Display',
        processor: '1.6 GHz Intel Core i5- 10210U Quad - Core',
        memory: ' 16 GB LPDDR4X',
        hardDrive: ' 512GB NVMe SSD',
        oldPrice: '$1,179',
        newPrice: '$1,079',
        gpu: 'NVIDIA GeForce GTX 1650 Max-Q (4GB GDDR5)',
        connection: 'Wi - Fi 6(802.11ax) | Bluetooth 5.0',
        keyBoard: 'USB Type-A & Type-C | Thunderbolt 3',
        weight: '2.8Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'
    },
    {
        id: 23,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "a.png",
            "a.png",
            "a.png",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 15.6" Creator Series Modern 15 Laptop',
        brand: 'MSI',
        rate: 4.6,
        reviews: 29,
        sold: 39,
        screen: '15.6" 1920 x 1080 Full HD IPS Display',
        processor: '1.8 GHz Intel Core i7- 10510U Quad - Core',
        memory: ' 8GB DDR4 ',
        hardDrive: ' 512GB NVMe PCIe M.2 SSD',
        oldPrice: '$889',
        newPrice: '$870',
        gpu: 'NVIDIA GeForce MX330 (2GB GDDR5)',
        connection: 'Wi - Fi 5(802.11ac) | Bluetooth 5.0',
        keyBoard: 'USB Type-A & Type-C | HDMI',
        weight: '2.5Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'
    },
    {
        id: 23,
        showCaseImgs: [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "a.png",
            "a.png",
            "a.png",
        ],
        video: 'src="https://www.youtube.com/embed/Vq9kZVWk114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
        productName: 'MSI 15.6" Prestige 15 Laptop',
        brand: 'MSI',
        rate: 4.3,
        reviews: 46,
        sold: 30,
        screen: '15.6" 3840 x 2160 4K Display',
        processor: '1.1 GHz Intel Core i7- 10710U Six - Core',
        memory: ' 32GB DDR4 ',
        hardDrive: '1TB NVMe PCIe SSD',
        oldPrice: '$1,889',
        newPrice: '$1,770',
        gpu: 'NVIDIA GeForce GTX 1650 (4GB GDDR5)',
        connection: 'Wi - Fi 6(802.11ax) | Bluetooth 5.0',
        keyBoard: 'Backlight',
        weight: '2.3Kg',
        battery: 'Li-Ion 4-Cell 99.9Wh'
    },
];

// loadProductDetail();
var loadProductDetail = () => {
    let curProductID = new URLSearchParams(window.location.search).get('product');
    showCase.append(createShowCase(curProductID));
    content.append(createContent(curProductID));
    specs.append(getSpecifications(curProductID))
    moreDetail.append(getProductDetail(curProductID))
    loadMyCart()

    mainImgSlide = document.querySelectorAll('.main-img');
    imgSlide = document.querySelectorAll('.img-slide');
    btnIncrease = document.querySelector('.btn-increase');
    btnDecrease = document.querySelector('.btn-decrease');
    btnToCart = document.querySelector('.btn-to-cart');
    quantity = document.querySelector('#quantity');
}

function loadMyCart() {
    let items = Object.keys(localStorage)

    if (items.length > 0) {
        cartAmount.textContent = items.length
        myCart.classList.replace('no-items', 'have-items')
    }

    for (i of items) {
        cartItem.prepend(createMyCartItem(i))
    }
}

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

window.loadProductDetail();

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

btnToCart.addEventListener('click', () => {
    let curProductID = new URLSearchParams(window.location.search).get('product');
    myCart.classList.replace('no-items', 'have-items')

    let cartQuan = parseInt(quantity.value)

    let temp = localStorage.getItem('item-' + curProductID)

    if (temp != null) {
        localStorage.setItem('item-' + curProductID, `${products[curProductID - 1]['productName']};${parseInt(temp.split(';')[1]) + cartQuan};
        ${products[curProductID - 1]['showCaseImgs'][0]}`)

        temp = localStorage.getItem('item-' + curProductID)
        let quan = temp.split(';')[1]

        updateQuantity(curProductID, quan)
    }
    else {
        localStorage.setItem('item-' + curProductID, `${products[curProductID - 1]['productName']};${cartQuan};
        ${products[curProductID - 1]['showCaseImgs'][0]}`)
        cartItem.prepend(createMyCartItem('item-' + curProductID))
    }

    cartAmount.textContent = Object.keys(localStorage).length
});

function createMyCartItem(idx) {
    let li = document.createElement('li');

    li.setAttribute('id', 'item' + idx.split('-')[1])

    let items = localStorage.getItem(idx).split(';');

    li.innerHTML =
        `<img src="./img/products/Gaming-laptop/${idx.split('-')[1]}/${items[2].trim()}" alt="" />
        <span id="cart-item_name">${items[0]}<span id="cart-item_quan">x${items[1]}</span></span>
        <i class="fas fa-times my-cart-remove"></i>`
    return li;
}

function updateQuantity(idx, newQuan) {
    document.querySelector(`#mycart-item li#item${idx} #cart-item_quan`).textContent = `X${newQuan}`
}

function getSpecifications(idx) {
    let table = document.createElement('table');
    table.setAttribute('cellpadding', '0');
    table.setAttribute('cellspacing', '0');
    table.innerHTML = `
            <tr>
              <td>Brand</td>
              <td>${products[idx - 1]['brand']}</td>
            </tr>

            <tr>
              <td>Model</td>
              <td>${products[idx - 1]['productName']}</td>
            </tr>

            <tr>
                <td>CPU</td>
                <td>${products[idx - 1]['processor']}</td>
            </tr>

            <tr>
                <td>RAM</td>
                <td>${products[idx - 1]['memory']}</td>
            </tr>

            <tr>
                <td>GPU</td>
                <td>${products[idx - 1]['gpu']}</td>
            </tr>

            <tr>
                <td>Hard Drive</td>
                <td>${products[idx - 1]['hardDrive']}</td>
            </tr>

            <tr>
              <td>Screen Resolution</td>
              <td>${products[idx - 1]['screen']}</td>
            </tr>

            <tr>
              <td>Connections</td>
              <td>${products[idx - 1]['connection']}</td>
            </tr>

            <tr>
              <td>KeyBoard</td>
              <td>${products[idx - 1]['keyBoard']}</td>
            </tr>

            <tr>
              <td>Weight</td>
              <td>${products[idx - 1]['weight']}</td>
            </tr>

            <tr>
              <td>Battery</td>
              <td>${products[idx - 1]['battery']}</td>
            </tr>

            <tr>
              <td>OS</td>
              <td>Windows 10 Home</td>
            </tr>`
    return table;
}

function getProductDetail(idx) {

    let wrapper = document.createElement('div');

    wrapper.innerHTML = `
        <h3>About this product:</h3>
        <img src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][5]}"/>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum!
        <br>
        <br>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum!
        </p>
        <img src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][6]}"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum!</p>
        <img src="./img/products/Gaming-laptop/${idx}/${products[idx - 1]['showCaseImgs'][7]}"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum! Qui, esse explicabo dolore architecto, distinctio molestiae excepturi a pariatur fugiat, repudiandae deserunt. Earum expedita illo provident minus dignissimos eius assumenda laudantium. Repellat, sunt. Dicta, harum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officia natus, itaque consequuntur cum earum esse. Velit praesentium omnis sapiente numquam magni! Commodi, rerum!</p>
        <h3>Quick Review:</h3>
        <iframe ${products[idx - 1]['video']}></iframe>
    `
    return wrapper
}

myCart.addEventListener('click', () => {
    window.location.href = "./myCart.html"
})

// Menu toggle 
$(document).ready(() => {
    menuToggler.click(() => {
        navLinks.toggleClass('menu-active')
        menuToggler.toggleClass('menu-close')
    })
})

// Sticky navbar after scroll
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});