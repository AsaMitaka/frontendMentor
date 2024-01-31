const ICON_PLUS_SRC = './assets/images/icon-plus.svg';
const ICON_MINUS_SRC = './assets/images/icon-minus.svg';

const accordionToggle = (e, accordion) => {
  e.preventDefault();

  accordions.forEach((item) => {
    const content = item.querySelector('.content');
    const icon = item.querySelector('.accordion-header');

    if (item !== accordion) {
      content.classList.add('closed');
      icon.classList.remove('opened');
      icon.querySelector('img').src = ICON_PLUS_SRC;
    }
  });

  const content = accordion.querySelector('.content');
  const icon = accordion.querySelector('.accordion-header');

  content.classList.toggle('closed');
  icon.classList.toggle('opened');

  const isOpened = !content.classList.contains('closed');
  icon.querySelector('img').src = isOpened ? ICON_MINUS_SRC : ICON_PLUS_SRC;
};

const accordions = document.querySelectorAll('.accordion__list-item');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', (e) => accordionToggle(e, accordion));
});
