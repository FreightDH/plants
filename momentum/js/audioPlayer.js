import playList from "./playList.js";

const playPause = document.querySelector('.player-controls__play');
const playNextButton = document.querySelector('.player-controls__next');
const playPrevButton = document.querySelector('.player-controls__prev');
const playListContainer = document.querySelector('.player-list');
const songs = [];
let isPlay = false;
let playNum = 0;

const audio = new Audio();

export function createPlaylist() {
	playList.forEach(track => {
		const li = document.createElement('li');
	li.classList.add('player-list__item');
		li.textContent = track.title;
		playListContainer.append(li);
		songs.push(li); 
	});	
}

function playAudio() {
  	audio.src = playList[playNum].src;
  	audio.currentTime = 0;
	
	if (!isPlay) {
		isPlay = true;
		audio.play();
		songs[playNum].classList.add('active');
		playPause.classList.add('play');
	} else {
		isPlay = false;
		audio.pause();	
		songs[playNum].classList.remove('active');
		playPause.classList.remove('play');
	}
}

function playNext() {
	songs[playNum].classList.remove('active');
	playNum = playNum < playList.length - 1 ? playNum += 1 : 0;
	isPlay = false;
	playAudio();
}

function playPrev() {
	songs[playNum].classList.remove('active');
	playNum = playNum > 0 ? playNum -= 1 : playList.length - 1;
	isPlay = false;
	playAudio();
}

playPause.addEventListener('click', playAudio);
playNextButton.addEventListener('click', playNext);
playPrevButton.addEventListener('click', playPrev);