const article = document.querySelector('.article');
const items = document.querySelectorAll('.article__list--item');
const submit = document.querySelector('.article__button');

let active = null;

const setActive = (e) => {
  active = e.target.value;
  items.forEach((item) => item.classList.remove('item-active'));
  e.target.classList.add('item-active');
};

items.forEach((item) => {
  item.addEventListener('click', setActive);
});

const resetActive = submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (active !== null) thankScreen();
});

const thankScreen = () => {
  article.innerHTML = '';
  document.body.innerHTML = `<article class="thank">
    <figure class="thank__figure">
      <img class="thank__figure--img" src="./images/illustration-thank-you.svg" alt="thank img" />
    </figure>
    <div class="thank__header">You selected ${active} out of 5</div>
    <h1 class="thank__title">Thank you!</h1>
    <p class="thank__text">
      We appreciate you taking the time to give a rating. If you ever need more support, don’t
      hesitate to get in touch!
    </p>
  </article>`;
};
