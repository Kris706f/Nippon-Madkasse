
/*Herunder er det som skal bruges til Info, Nærring og Menu*/

function showSection(sectionId) {
    const sections = document.querySelectorAll('.bokstekst');
    const tabs = document.querySelectorAll('.nav-link');
  
    sections.forEach((section) => {
      section.classList.remove('active');
    });
  
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
  
    const selectedSection = document.getElementById(sectionId);
    const selectedTab = document.querySelector(`.nav-link[onclick="showSection('${sectionId}')"]`);
  
    selectedSection.classList.add('active');
    selectedTab.classList.add('active');
  }


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


