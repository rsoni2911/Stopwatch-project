
// accessing the tags
let timerDisplay= document.querySelector('.timerDisplay');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

// Declaring variables
let msec=0;
let secs=0;
let mins=0;

let timerId= null;


// Event handling start of button 
startBtn.addEventListener('click', function(){
    if(timerId!== null){
       clearInterval(timerId);    }
   timerId= setInterval(startTimer,10);
});

// Event handling to stop the stopwatch 
stopBtn.addEventListener('click', function(){
   clearInterval(timerId);
});

//  Event handling to reset the stopwatch 
resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML =`00 : 00 : 00`;

    msec = secs= mins =0;
});


// function to start the timer
function startTimer(){
     // Increment seconds and update minutes and hours accordingly
    msec++;
    if(msec ==100){
        msec =0;
        secs++;
        if(secs == 60){
            secs=0;
            mins++;
        }
    }

    
    // Format the time and update the display
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;


    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}