const header = document.querySelector('#header'); 
const menu = document.querySelector('.nav') /* Навигационная панель */
const burgerMenu = document.querySelector('.nav-toggle') /* Бургер Меню */
const navID = document.getElementById("nav_toggle")

// const body = document.body;

// Активация Бургер Меню и открытия списка Link 
if (menu && burgerMenu) {
    burgerMenu.addEventListener('click', () =>{
        menu.classList.toggle('active')
        burgerMenu.classList.toggle('active')
        // body.classList.toggle('lock')
    })
}

const anchors = document.querySelectorAll('.nav__link')

anchors.forEach(anchor => [
    // console.log(anchors)
    anchor.addEventListener('click', event => {
        event.preventDefault() /* Удаление элементов браузера */

        // Удаление функции ссылки (проще говоря убирает функцию обновления страницы при нажатии ссылки)
        const blockId = anchor.getAttribute('href').substring(1);

        // Smooth scroll
        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
]);

// Фиксация nav bar 
window.addEventListener("scroll", function() { // Когда пользователь скроллит окно
        let scrollOffset = window.scrollY; // Обновляем scrollOffset новой позицией скролла
        checkScroll(scrollOffset); // Проверяем, должен ли заголовок быть фиксированным или нет
    });


function checkScroll(scrollOffset) { // Функция для добавления/удаления класса 'fixed' к заголовку
        if (scrollOffset >= 1) { // Если страница прокручена вниз хотя бы на 1px
            header.classList.add("fixed"); // Добавляем класс 'fixed' к заголовку
        } else {
            header.classList.remove("fixed"); // Удаляем класс 'fixed', если вверху
        }
    }

// Закрытие nav после нажатия на нужный раздел
const closeNavToggle = document.querySelectorAll("[data-scroll]").forEach(link => {
    link.addEventListener('click', function (){
        menu.classList.remove('active');
        navID.classList.remove('active');
    });
});
// burgerMenu.addEventListener('click', function(){
//     console.log('click!!!');
    
// })
