
/*Herunder er det som skal bruges til burgermenu*/

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');



menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

let currentSection = "";

/*Herunder er det som skal bruges til Info, Nærring og Menu*/

function showSection(sectionId) {
    if (currentSection !== "") {
        document.getElementById(currentSection).classList.remove('active');
    }
    document.getElementById(sectionId).classList.add('active');
    currentSection = sectionId;
}
showSection('info');








