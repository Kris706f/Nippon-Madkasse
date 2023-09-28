
/*Herunder er det som skal bruges til burgermenu*/

const menu_btn = document.querySelector('.hamburger');

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
});