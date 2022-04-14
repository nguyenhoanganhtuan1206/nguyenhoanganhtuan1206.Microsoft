const btnList = document.querySelector('.js-list');
const navOnMobile = document.querySelector('.js-nav-on-mobile');
const btnClose = document.querySelector('.js-close');

/* Show nav on mobile */
function showNavOnMobile() {
    btnList.style.display = 'none';
    btnClose.style.display = 'inline-block';
    navOnMobile.classList.add('open');
}

function hiddenOnMobile() {
    btnClose.style.display = 'none';
    btnList.style.display = 'inline-block';
    navOnMobile.classList.remove('open');
}

btnList.addEventListener('click', showNavOnMobile);
btnClose.addEventListener('click' , hiddenOnMobile);