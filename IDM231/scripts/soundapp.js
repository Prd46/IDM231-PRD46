


const soundButton = document.querySelectorAll(".sound-button");
const audioPlayer = document.querySelectorAll("#speakers");
console.log(soundButton);
//break array into multipe buttons
soundButton.forEach(function (individualButtonElement){

    individualButtonElement.addEventListener("click", function(){
    const audioTrackSource = individualButtonElement.getAttribute('data-audio-file');
    console.log(audioTrackSource);
    individualButtonElement.addEventListener("click", function(){

        audioPlayer.src = `./sounds/${audioTrackSource}`
        audioPlayer.play();
    })

});



});