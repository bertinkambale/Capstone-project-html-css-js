const hamburg = document.querySelector('.hamburg');
const Menu = document.querySelector('.menu');


hamburg.addEventListener('click', () => {
    hamburg.classList.toggle('display');
    Menu.classList.toggle('display');  
});


 document.querySelectorAll('menu-item').forEach((n) => 
  n.addEventListener('click', () =>{
    hamburg.classList.toggle('display');
    Menu.classList.toggle('display');
  
  })); 

const Teachers = [{
  teacherImagee:'img-folder/teacher1.jpg',
  teachearName:'Bella mwa',
  teacherDomain:'her,english teacher',
  teacherAbout:'bella is best teacher of english she is from USA , she studied in havard university,she has a lot of experiences in teaching Englihs'
},
{
  teacherImagee:'img-folder/teacher2.jpg',
  teachearName:'Bertin kam',
  teacherDomain:'him,spanish teacher',
  teacherAbout:'bertin is best teacher of spanish he is from Spain , he studied in Ukinsad university,he has a lot of experiences in teaching Spanish' 
},
{
  teacherImagee:'img-folder/teacher3.jfif',
  teachearName:'Linda ker',
  teacherDomain:'her,Arbic teacher',
  teacherAbout:'Linda is best teacher of Arbic she is from Arabi , she studied in USIMA university,she has a lot of experiences in teaching Arbic'
},
{
  teacherImagee:'img-folder/teacher4.jfif',
  teachearName:'Benjamin nyam',
  teacherDomain:'him,Lingala teacher',
  teacherAbout:'benjamin is best teacher of lingala he is from DRC , he studied in Unikin university,he has a lot of experiences in teaching Lingala'
},
{
  teacherImagee:'img-folder/teacher5.jfif',
  teachearName:'kevin Zam',
  teacherDomain:'him,french teacher',
  teacherAbout:'kevin is best teacher of french he is from France , he studied in LOURD university,he has a lot of experiences in teaching French'
},
{
  teacherImagee:'img-folder/teacher6.jfif',
  teachearName:'Rachel Bim',
  teacherDomain:'her,Italiano teacher',
  teacherAbout:'Rachel is best teacher of Italiano she is from Italia , she studied in Roma university,she has a lot of experiences in teaching Italiano'
},
];

const allCards = document.querySelector('.blocteacher');

Teachers.forEach((cards) => {
  const div = document.createElement('div');
  div.innerHTML =
    `<div class="cardteach">
           <img src="${cards.teacherImagee}" alt="">
      <div class="picteach">
            <h3>${cards.teachearName}</h3>
            <p class="italic">${cards.teacherDomain}</p>
            <p>${cards.teacherAbout}</p>
      </div>
    </div>`;
  allCards.appendChild(div);
});
