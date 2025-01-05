//=-=-=-=-=-=-=-=-=-=-=-=- background music =-=-=-=-=-=-=-==-=-=-=-=-=--=//
const myMusic = new Audio();
myMusic.src = "./sound/game_sound2.mp3";
myMusic.volume = 1;
myMusic.play();
//=-=-=-=-=-=-=-=-=-=-=-=- start btn sound =-=-=-=-=-=-=-==-=-=-=-=-=--=//


// const button = document.getElementById('sg');
// button.addEventListener('click', () => {
//     const sound = new Audio('./sound/start_click.mp3');
//     // Play the sound
//     sound.play(); 
//     setTimeout(() => {
//         // Redirect to the new page
//         window.location.href = 'level.html';
//     }, 100); // Delay in milliseconds
// }); 


const btnsound = (btnAc) => {
    const sound = new Audio('./sound/start_click.mp3');
    // Play the sound
    sound.play();
    setTimeout(() => {
        window.location.href = btnAc;
    }, 200);// Delay in milliseconds
};
document.getElementById('sg').addEventListener('click', () => { btnsound('level.html'); });
// document.getElementById('l2').addEventListener('click', () => { btnsound('./level_pages/level_2.html');});
// document.getElementById('l3').addEventListener('click', () => { btnsound('./level_pages/level_3.html');});
// document.getElementById('l4').addEventListener('click', () => { btnsound('./level_pages/level_4.html');});
// document.getElementById('l5').addEventListener('click', () => { btnsound('./level_pages/level_5.html');});



