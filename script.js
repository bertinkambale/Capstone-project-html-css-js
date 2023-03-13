const hamburg = document.querySelector('.hamburg');
const Menu = document.querySelector('.menu');

hamburg.addEventListener('click', () => {
    hamburg.classList.toggle('active');
  Menu.classList.toggle('active');
});

document.querySelectorAll('.menu-item').forEach((n) => n
  .addEventListener('click', () => {
    hamburg.classList.remove('active');
    Menu.classList.remove('active');
  }));
  
  //---------------javascript storing-------------------------------//
 