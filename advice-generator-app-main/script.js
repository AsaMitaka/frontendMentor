const title = document.querySelector('#title');
const text = document.querySelector('#text');
const btn = document.querySelector('#btn');

const advices = [
  {
    title: '#110',
    text: 'Hello',
  },
  {
    title: '#111',
    text: 'Help',
  },
  {
    title: '#112',
    text: 'Hi',
  },
  {
    title: '#117',
    text: "It is easy to sit up and take notice, what's difficult is getting up and takink action.",
  },
];

const randomNumber = () => {
  return Math.floor(Math.random() * advices.length);
};

btn.addEventListener('click', () => {
  const randNum = randomNumber();

  title.textContent = `ADVICES ${advices[randNum].title}`;
  text.textContent = advices[randNum].text;
});
