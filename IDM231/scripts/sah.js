const enter = document.querySelector('.js-enter');
const xButton = document.querySelector('.js-mainX');
const result = document.querySelector('.js-result');
const resultImage = document.querySelector('.js-resultImage');
const resultText = document.querySelector('.js-resultText');
const help = document.querySelector('.js-helpBox');
const helpButton = document.querySelector('.js-help')
const helpXButton = document.querySelector('.js-helpXButton');
//Animal button definitions
const turtle = document.querySelector('.turtle');
const squirrel = document.querySelector('.squirrel');
const snail = document.querySelector('.snail');
const sheep = document.querySelector('.sheep');
const rabbit = document.querySelector('.rabbit');
const ox = document.querySelector('.ox');
const kangaroo = document.querySelector('.kangaroo');
const giraffe = document.querySelector('.giraffe');
const dog = document.querySelector('.dog');
const camel = document.querySelector('.camel');
const blowfish = document.querySelector('.blowfish');
const badger = document.querySelector('.badger');

//Sounds

//Main date input functionality
enter.addEventListener('click', function (event){
    event.preventDefault();
    const inputField = document.querySelector('.js-classInput');
    const inputValue = inputField.value; 
    let birthday = new Date(inputValue);
    let month = birthday.getMonth() + 1; 
    let day = birthday.getDate() + 1; 
    let year = birthday.getFullYear(); 

    const current = new Date();
    let thisMonth = current.getMonth() + 1; 
    let today = current.getDate(); 
    let thisYear = current.getFullYear(); 

    console.log(month, day, year, thisMonth, today, thisYear);
    if (((year >= thisYear ) && (month >= thisMonth) && (day >= today))||((!year)||(!month)||(!day))){ 
        result.classList.remove('active');
        alert('Please choose a valid birthday!');
        
    }else if (((month == 1 ) && (day >= 20))||((month == 2) && (day <= 18))){ 
        result.classList.add('active');
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Snail-Levels-2.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Snail</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">If you lost the last battle, buy it to give the rest of your team 1, 2, or 3 attack and health, depending on its level.</p>'
    }else if (((month == 2 ) && (day >= 19))||((month == 3) && (day <= 20))){ 
        result.classList.add('active');
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Badger-Tiers.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Badger</h1><h2 class="resultStats">5 Attack / 4 Health</h2><p class="resultAbility">When it faints, it deals its attack damage to adjacent pets, multiplied by 2 and 3 depending on its level.</p>'
    }else if (((month == 3 ) && (day >= 21))||((month == 4) && (day <= 19))){ 
        result.classList.add('active');
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Sheep-Levels-2.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Sheep</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">When it faints, it spawns two rams with 2, 4, 6 attack and health, depending on its level.</p>'
    }else if (((month == 4 ) && (day >= 20))||((month == 5) && (day <= 20))){ 
        result.classList.add('active');
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Ox-Tiers.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Ox</h1><h2 class="resultStats">1 Attack / 4 Health</h2><p class="resultAbility">When a friend ahead of it faints, it gives itself melon armor and gains 2, 4, or 6 attack depending on the level</p>'
    }else if (((month == 5 ) && (day >= 21))||((month == 6) && (day <= 21))){ 
        result.classList.add('active');
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Squirrel-Levels-2.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Squirrel</h1><h2 class="resultStats">2 Attack / 5 Health</h2><p class="resultAbility">At the start of the turn, it will discount shop food by 1, 2, or 3 gold depending on its level.</p>'
    }else if (((month == 6 ) && (day >= 22))||((month == 7) && (day <= 22))){ 
        result.classList.add('active');
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Blowfish-Tiers.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Blowfish</h1><h2 class="resultStats">3 Attack / 5 Health</h2><p class="resultAbility">When it gets hurt, it will deal 2, 4, or 6 damage to a random enemy depending on its level.</p>'
    }else if (((month == 7 ) && (day >= 23))||((month == 8) && (day <= 22))){ 
        result.classList.add('active');
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Dog-Levels.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Dog</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">When a friendly pet is summmoned, it gains 1, 2, or 3 attack OR health depending on its level .</p>'
    }else if (((month == 8 ) && (day >= 23))||((month == 9) && (day <= 22))){ 
        result.classList.add('active');
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Rabbit-Tiers.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Rabbit</h1><h2 class="resultStats">3 Attack / 2 Health</h2><p class="resultAbility">When a pet eats shop food, it gains 1, 2, or 3 health depending on the level of the rabbit.</p>'
    }else if (((month == 9 ) && (day >= 23))||((month == 10) && (day <= 22))){ 
        result.classList.add('active');
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Turtle-Levels-2.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Turtle</h1><h2 class="resultStats">1 Attack / 2 Health</h2><p class="resultAbility">When it faints, it gives 1, 2, or 3 friends behind it Melon Armor, depending on its level.</p>'
    }else if (((month == 10 ) && (day >= 23))||((month == 11) && (day <= 22))){ 
        result.classList.add('active');
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Kangaroo-Tiers.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Kangaroo</h1><h2 class="resultStats">1 Attack / 2 Health</h2><p class="resultAbility">When the friend ahead of it attacks, it gives itself 2, 4, or 6 attack and health depending on its level.</p>'
    }else if (((month == 11 ) && (day >= 23))||((month == 12) && (day <= 21))){ 
        result.classList.add('active');
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Giraffe-Tiers.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Giraffe</h1><h2 class="resultStats">2 Attack / 5 Health</h2><p class="resultAbility">When you end your turn, it will give 1, 2, or 3 friends ahead of it 1 attack and health depending on its level.</p>'
    }else if (((month == 12 ) && (day >= 22))||((month == 1) && (day <= 19))){ 
        result.classList.add('active');
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Camel-Tiers.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Camel</h1><h2 class="resultStats">2 Attack / 5 Health</h2><p class="resultAbility">When it gets hurt, it gives the friend behind it +1 +2, +2 +4, or +3 +6 attack and health depending on its level.</p>'

    }
})
xButton.addEventListener('click', function(){
    result.classList.remove('active');
})
helpButton.addEventListener('click', function(){
    help.classList.remove('inactive');
})
helpXButton.addEventListener('click', function(){
    help.classList.add('inactive');
})
//Animal buttons
turtle.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Turtle-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Turtle</h1><h2 class="resultStats">1 Attack / 2 Health</h2><p class="resultAbility">When it faints, it gives 1, 2, or 3 friends behind it Melon Armor, depending on its level.</p>'
})
squirrel.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Squirrel-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Squirrel</h1><h2 class="resultStats">2 Attack / 5 Health</h2><p class="resultAbility">At the start of the turn, it will discount shop food by 1, 2, or 3 gold depending on its level.</p>'
})
snail.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Snail-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Snail</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">If you lost the last battle, buy it to give the rest of your team 1, 2, or 3 attack and health, depending on its level.</p>'
})
sheep.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Sheep-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Sheep</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">When it faints, it spawns two rams with 2, 4, 6 attack and health, depending on its level.</p>'
})
rabbit.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Rabbit-Tiers.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Rabbit</h1><h2 class="resultStats">3 Attack / 2 Health</h2><p class="resultAbility">When a pet eats shop food, it gains 1, 2, or 3 health depending on the level of the rabbit.</p>'
})
ox.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Ox-Tiers.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Ox</h1><h2 class="resultStats">1 Attack / 4 Health</h2><p class="resultAbility">When a friend ahead of it faints, it gives itself melon armor and gains 2, 4, or 6 attack depending on the level</p>'
})
kangaroo.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Kangaroo-Tiers.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Kangaroo</h1><h2 class="resultStats">1 Attack / 2 Health</h2><p class="resultAbility">When the friend ahead of it attacks, it gives itself 2, 4, or 6 attack and health depending on its level.</p>'
})
giraffe.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Giraffe-Tiers.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Giraffe</h1><h2 class="resultStats">2 Attack / 5 Health</h2><p class="resultAbility">When you end your turn, it will give 1, 2, or 3 friends ahead of it 1 attack and health depending on its level.</p>'
})
dog.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Dog-Levels.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Dog</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">When a friendly pet is summmoned, it gains 1, 2, or 3 attack OR health depending on its level .</p>'
})
camel.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Camel-Tiers.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Camel</h1><h2 class="resultStats">2 Attack / 5 Health</h2><p class="resultAbility">When it gets hurt, it gives the friend behind it +1 +2, +2 +4, or +3 +6 attack and health depending on its level.</p>'
})
blowfish.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Blowfish-Tiers.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Blowfish</h1><h2 class="resultStats">3 Attack / 5 Health</h2><p class="resultAbility">When it gets hurt, it will deal 2, 4, or 6 damage to a random enemy depending on its level.</p>'
})
badger.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Badger-Tiers.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Badger</h1><h2 class="resultStats">5 Attack / 4 Health</h2><p class="resultAbility">When it faints, it deals its attack damage to adjacent pets, multiplied by 2 and 3 depending on its level.</p>'
})