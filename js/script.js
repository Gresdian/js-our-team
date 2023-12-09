const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },   
];

for(let i=0; i<team.length; i++){
    let member = team[i];
    /* console.log(member.name);
    console.log(member.role);
    console.log(member.image); */
    for(key in member){
         console.log(member[key]);
    }
}

const cards = document.getElementById('cards');
for(let i=0; i<team.length; i++){
    let member = team[i];

    const col = document.createElement('div');
    col.classList.add('col-4');
    
    const card= document.createElement('div');
    card.classList.add('card','bg-light', 'border','rounded-0')
    col.appendChild(card);
    let img = `<img class="img-fluid" src="./img/${member.image}" alt="${member.name}">`
    let text = `<h2>${member.name}</h2><p>${member.role}</p>${member.image}`;

    card.innerHTML = text
    
    cards.appendchild(col);
}



