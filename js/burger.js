document.addEventListener('DOMContentLoaded', () => {

  const burgerBtn = document.querySelector('.header__button-burger');
  const burgerNav = document.querySelector('.header-nav__mobile');
  const lastLinkNav = document.querySelector('.header-nav__mobile li:last-child .mobile__nav-link');

  const handlerMenu = event => {
    const target = event.target;
    const parent = target.closest('.header__button-burger');

    if((!parent && target !== burgerNav) || target.classList.contains('mobile__nav-link')) {
      toggleMenu();
    }
  }

  const toggleMenu = () => {
    burgerNav.classList.toggle('active');
    burgerBtn.classList.toggle('active');

    if(burgerNav.classList.contains('active')) {
      document.body.addEventListener('click', handlerMenu);
    } else {
      document.body.removeEventListener('click', handlerMenu);
    }
  }

  burgerBtn.addEventListener('click', toggleMenu);

});
