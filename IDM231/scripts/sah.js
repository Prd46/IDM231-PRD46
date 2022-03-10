const enter = document.querySelector('.js-enter');

enter.addEventListener('click', function (event){
    event.preventDefault();
    const inputField = document.querySelector('.js-classInput');
    const inputValue = inputField.value; 
    let birthday = new Date(inputField.value);
    console.log(birthday);
    let month = birthday.getMonth() + 1; 
    let day = birthday.getDate() + 1; 
    let year = birthday.getFullYear(); 

    const current = new Date();
    let thisMonth = current.getMonth() + 1; 
    let today = current.getDate(); 
    let thisYear = current.getFullYear(); 

    console.log(month, day, year, thisMonth, today, thisYear);
    //console.log(month, day);
    const readout = document.querySelector('.js-outputText');
    const warning = document.querySelector('.js-warning');
    warning.innerHTML = "";
    

    if ((year >= thisYear ) && (month >= thisMonth) && (day >= today)){ 
        warning.innerHTML = "Please choose a valid birthday";
    }else if ((month == 1 ) && (day >= 20)){ 
        readout.innerHTML = "You were born in Winter"; 
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