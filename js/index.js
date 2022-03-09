const fullpageEl = document.getElementById('fullpage');
const menuBtn = document.querySelector('.menu_btn');
const navigation = document.querySelector('.navigation');
const navCloseBtn = document.querySelector('.navigation_close_btn');

const blurOverlay = document.querySelector('.blur_overlay');

const IS_ACTIVE = 'is--active';

const toggleNavigation = () => {
  navigation.classList.toggle(IS_ACTIVE);
  blurOverlay.classList.toggle(IS_ACTIVE);
  fullpageEl.classList.toggle('no-scroll');
};

menuBtn.addEventListener('click', toggleNavigation);
navCloseBtn.addEventListener('click', toggleNavigation);
blurOverlay.addEventListener('click', toggleNavigation);

new fullpage('#fullpage', {
  autoScrolling: true,
  scrollBar: true,
});
