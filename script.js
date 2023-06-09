const hamburg = document.querySelector('.hamburg');
const Menu = document.querySelector('.menu');

hamburg.addEventListener('click', () => {
  hamburg.classList.toggle('display');
  Menu.classList.toggle('display');
});

document.querySelectorAll('menu-item').forEach((n) => n.addEventListener('click', () => {
  hamburg.classList.toggle('display');
  Menu.classList.toggle('display');
}));

const Teachers = [{
  teacherImagee: 'img-folder/teacher1.jpg',
  teachearName: 'Bella',
  teacherDomain: 'her,english teacher',
  teacherAbout: 'bella is best teacher of english she is from USA.',
},
{
  teacherImagee: 'img-folder/teacher2.jpg',
  teachearName: 'Bertin',
  teacherDomain: 'him,spanish teacher',
  teacherAbout: 'bertin is best teacher of spanish he is from Spain.',
},
{
  teacherImagee: 'img-folder/teacher3.jfif',
  teachearName: 'Linda',
  teacherDomain: 'her,Arbic teacher',
  teacherAbout: 'Linda is best teacher of Arbic she is from Arabi.',
},
{
  teacherImagee: 'img-folder/teacher4.jfif',
  teachearName: 'Benjamin',
  teacherDomain: 'him,Lingala teacher',
  teacherAbout: 'benjamin is best teacher of lingala he is from DRC.',
},
{
  teacherImagee: 'img-folder/teacher5.jfif',
  teachearName: 'kevin',
  teacherDomain: 'him,french teacher',
  teacherAbout: 'kevin is best teacher of french he is from France.',
},
{
  teacherImagee: 'img-folder/teacher6.jfif',
  teachearName: 'Rachel',
  teacherDomain: 'her,Italiano teacher',
  teacherAbout: 'Rachel is best teacher of Italiano she is from Italia.',
},
];

const allCards = document.querySelector('.blocteacher');

Teachers.forEach((cards) => {
  const div = document.createElement('section');
  div.innerHTML = `<div class="cardteach">
           <img src="${cards.teacherImagee}" alt="">
      <div class="picteach">
            <h3>${cards.teachearName}</h3>
            <p class="italic">${cards.teacherDomain}</p>
            <p>${cards.teacherAbout}</p>
      </div>
    </div>`;
  allCards.appendChild(div);
});
