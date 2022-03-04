const audio = document.querySelector('audio');
const playBtn = document.querySelector('.player-button');

let isPlay = false;
function playPauseAudio() {
    if(!isPlay) {
    audio.src = './assets/audio/' + listTrack[playNum];
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    } else  {
        audio.pause(); 
        isPlay = false;
    }
  }

  function toggleBtn() {
    playBtn.classList.toggle('pause');
  }
 playBtn.addEventListener('click', toggleBtn);
 playBtn.addEventListener('click', playPauseAudio);

/*переключение треков при клике на nav*/

const solovey = document.querySelector('.solovey');
const drozd = document.querySelector('.drozd');
const forest = document.querySelector('.forest');
const javoronok = document.querySelector('.javoronok');
const slavka = document.querySelector('.slavka');
const fon = document.querySelector('main');
const navList = document.querySelectorAll('nav-list');
const navItem = document.querySelectorAll('nav-item');

function playsolovey() {

    fon.classList.add('fonSolovey');
    fon.classList.remove('fonDrozd', 'fonForest', 'fonJavoronok', 'fonSlavka');

    solovey.classList.add('fonSolovey'); 
    drozd.classList.remove('fonDrozd');
    forest.classList.remove('fonForest');
    javoronok.classList.remove('fonJavoronok');
    slavka.classList.remove('fonSlavka');
    if (playBtn.classList.contains('pause')) {
        playBtn.classList.remove('pause')
    };
    playNum = 0;
    isPlay = false;
}
function playdrozd() {
    fon.classList.add('fonDrozd');
    fon.classList.remove('fonSolovey', 'fonForest', 'fonJavoronok', 'fonSlavka');
    drozd.classList.add('fonDrozd'); 
    solovey.classList.remove('fonSolovey');
    forest.classList.remove('fonForest');
    javoronok.classList.remove('fonJavoronok');
    slavka.classList.remove('fonSlavka');

    if (playBtn.classList.contains('pause')) {
        playBtn.classList.remove('pause')
    };  
    playNum = 1;
    isPlay = false;
}
function playforest() {
    fon.classList.add('fonForest');
    fon.classList.remove('fonSolovey', 'fonDrozd', 'fonJavoronok', 'fonSlavka');
    forest.classList.add('fonForest'); 
    solovey.classList.remove('fonSolovey');
    drozd.classList.remove('fonDrozd');
    javoronok.classList.remove('fonJavoronok');
    slavka.classList.remove('fonSlavka');
    if (playBtn.classList.contains('pause')) {
        playBtn.classList.remove('pause')
    };
    playNum = 2; 
    isPlay = false;  
}
function playjavoronok() {
    fon.classList.add('fonJavoronok');
    fon.classList.remove('fonSolovey', 'fonDrozd', 'fonForest', 'fonSlavka');
    javoronok.classList.add('fonJavoronok'); 
    solovey.classList.remove('fonSolovey');
    drozd.classList.remove('fonDrozd');
    forest.classList.remove('fonForest');
    slavka.classList.remove('fonSlavka');
    if (playBtn.classList.contains('pause')) {
        playBtn.classList.remove('pause')
    };
    playNum = 3; 
    isPlay = false;
}
function playslavka() {
    fon.classList.add('fonSlavka');
    fon.classList.remove('fonSolovey', 'fonDrozd', 'fonForest', 'fonJavoronok');
    slavka.classList.add('fonSlavka');
    solovey.classList.remove('fonSolovey');
    drozd.classList.remove('fonDrozd');
    forest.classList.remove('fonForest');
    javoronok.classList.remove('fonJavoronok');
    if (playBtn.classList.contains('pause')) {
        playBtn.classList.remove('pause')
    };
    playNum = 4;   
    isPlay = false; 
}
solovey.addEventListener('click', playsolovey);
solovey.addEventListener('click', playPauseAudio);
solovey.addEventListener('click', toggleBtn);
drozd.addEventListener('click', playdrozd);
drozd.addEventListener('click', playPauseAudio);
drozd.addEventListener('click', toggleBtn);
forest.addEventListener('click', playforest);
forest.addEventListener('click', playPauseAudio);
forest.addEventListener('click', toggleBtn);
javoronok.addEventListener('click', playjavoronok);
javoronok.addEventListener('click', playPauseAudio);
javoronok.addEventListener('click', toggleBtn);
slavka.addEventListener('click', playslavka);
slavka.addEventListener('click', playPauseAudio);
slavka.addEventListener('click', toggleBtn);




/*переключение треков*/
let listPer = [playsolovey, playdrozd, playforest];

//-----------------------------------

const prePlay = document.querySelector('.play-prev');
const nextPlay = document.querySelector('.play-next');

function playPrev() {
    prePlay.classList.add('pre');
    setTimeout(() => prePlay.classList.remove('pre'), 600); 
    
    isPlay = !isPlay;
    if (playNum > 0) {
        playNum--;
        playPauseAudio(playNum);
      

    } else {
        playNum = 4;
        playPauseAudio(playNum);
    }
}

function playNext() {
    nextPlay.classList.add('next');
    setTimeout(() => nextPlay.classList.remove('next'), 600);
    isPlay = !isPlay;
    if (playNum < 4) {
        playNum++;
        playPauseAudio(playNum);
    } else {
        playNum = 0;
        playPauseAudio(playNum);
    }
}

prePlay.addEventListener('click', playPrev);
nextPlay.addEventListener('click', playNext);
nextPlay.addEventListener('click', playNext);

let playNum = 0;
let listTrack = ['solovey.mp3', 'drozd.mp3', 'forest.mp3', 'javoronok.mp3', 'slavka.mp3',];


/*let listImage = ['solovey.jpg', 'drozd.jpg', 'forest.jpg', 'javoronok.jpg', 'slavka.jpg',];
const navItem = document.querySelectorAll('nav-item');
function changNavItem() {
    navItem.style.background = `url(./assets/img/ + ${listImage[playNum]})`;
}
nextPlay.addEventListener('click', changNavItem);*/
