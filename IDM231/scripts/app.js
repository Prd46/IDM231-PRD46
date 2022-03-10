//make user input date
//something happens when user hits submit

const submitButton = document.querySelector(".js-submit-button");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const dateInput = document.querySelector(".js-classInput");
    //console.log(dateInput);
    const dateValue = dateInput.value;
    //console.log(dateValue);
    //format date
    //separate string by dash
    //or default date function
    let birthDate = new Date(dateInput.value); //.getFullYear();How companies do copyright with auto updating date
    let month = birthDate.getMonth() + 1;
    let day = birthDate.getDate() + 1;
    let year = birthDate.getFullYear();
    //console.log (month, day, year);

    const userAge = getAge(year) 
    const div = document.querySelector(".div");
    if (userAge > 21){
        div.innerHTML = `<p> You can drink because you were born in ${year}<p>`;
        console.log("You can drink");
    }else{
        div.innerHTML = `<p> You cannot drink because you were born in ${year}<p>`;
        console.log("You cannot drink");
    }

});

function getAge(inputYear) {
    // Get current year
    const currentYear = new Date().getFullYear();
    // Get passed in input year
    const year = inputYear;
    // Calculate age
    const age = currentYear - year;
    return age;
  }
