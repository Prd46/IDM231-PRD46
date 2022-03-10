const enter = document.querySelector('.js-enter');
const xButton = document.querySelector('.xButton');
const result = document.querySelector('.js-result');
const resultImage = document.querySelector('.js-resultImage');
const resultText = document.querySelector('.js-resultText');
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
        resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Turtle-Levels-2.png">'
        resultText.innerHTML = '<h1 class="resultAnimal">Turtle</h1><h2 class="resultStats">1 Attack / 2 Health</h2><p class="resultAbility">When it faints, it gives 1, 2, and 3 friends behind it Melon Armor, depending on its level.</p>'
    }else if ((month == 3 ) && (day > 21)){ 
        readout.innerHTML = "You were born in Spring"; 
    }else if ((month == 6 ) && (day < 22)){ 
        readout.innerHTML = "You were born in Spring"; 
    }else if ((month == 6 ) && (day > 21)){ 
        readout.innerHTML = "You were born in Summer"; 
    }else if ((month == 9 ) && (day < 22)){ 
        readout.innerHTML = "You were born in Summer"; 
    }else if ((month == 9 ) && (day > 21)){ 
        readout.innerHTML = "You were born in Fall"; 
    }else if ((month == 12 ) && (day < 22)){ 
        readout.innerHTML = "You were born in Fall"; 
    }else if ((month == 12 ) && (day > 21)){ 
        readout.innerHTML = "You were born in Winter"; 
    }
})
xButton.addEventListener('click', function(event){
    event.preventDefault();
    result.classList.remove('active');
})

//Animal buttons
turtle.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Turtle-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Turtle</h1><h2 class="resultStats">1 Attack / 2 Health</h2><p class="resultAbility">When it faints, it gives 1, 2, and 3 friends behind it Melon Armor, depending on its level.</p>'
})
squirrel.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Squirrel-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Squirrel</h1><h2 class="resultStats">2 Attack / 5 Health</h2><p class="resultAbility">At the start of the turn, it will discount shop food by 1, 2, or 3 gold depending on its level.</p>'
})
snail.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Snail-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Snail</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">If you lost the last battle, buy it to give the rest of your team +1, 2, or 3 attack and health, depending on its level.</p>'
})
sheep.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Snail-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Snail</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">If you lost the last battle, buy it to give the rest of your team +1, 2, or 3 attack and health, depending on its level.</p>'
})
rabbit.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Snail-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Snail</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">If you lost the last battle, buy it to give the rest of your team +1, 2, or 3 attack and health, depending on its level.</p>'
})
ox.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Snail-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Snail</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">If you lost the last battle, buy it to give the rest of your team +1, 2, or 3 attack and health, depending on its level.</p>'
})
kangaroo.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Snail-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Snail</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">If you lost the last battle, buy it to give the rest of your team +1, 2, or 3 attack and health, depending on its level.</p>'
})
giraffe.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Snail-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Snail</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">If you lost the last battle, buy it to give the rest of your team +1, 2, or 3 attack and health, depending on its level.</p>'
})
dog.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Snail-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Snail</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">If you lost the last battle, buy it to give the rest of your team +1, 2, or 3 attack and health, depending on its level.</p>'
})
camel.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Snail-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Snail</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">If you lost the last battle, buy it to give the rest of your team +1, 2, or 3 attack and health, depending on its level.</p>'
})
blowfish.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Snail-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Snail</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">If you lost the last battle, buy it to give the rest of your team +1, 2, or 3 attack and health, depending on its level.</p>'
})
badger.addEventListener('click', function(){
    result.classList.add('active');
    resultImage.innerHTML = '<img class="resultAnimal" src="media/Super-Auto-Pets-Snail-Levels-2.png">'
    resultText.innerHTML = '<h1 class="resultAnimal">Snail</h1><h2 class="resultStats">2 Attack / 2 Health</h2><p class="resultAbility">If you lost the last battle, buy it to give the rest of your team +1, 2, or 3 attack and health, depending on its level.</p>'
})