// CREATE PLAYLIST
import playList from "./playList.js";

const songs = [];

export function createPlaylist() {
	playList.forEach( (track, index) => {
		const li = document.createElement('li');
		li.classList.add('advanced-list__item');
		li.textContent = track.title;
		li.setAttribute('data-value', index);
		playListContainer.append(li);
		songs.push(li); 
	});	
}
// --------------------------------------------------------------------
// PLAYER FUNCTIONS
const playPause = document.querySelector('.advanced-controls__play');
const playNextButton = document.querySelector('.advanced-controls__next');
const playPrevButton = document.querySelector('.advanced-controls__prev');
const volumeButton = document.querySelector('.advanced-controls__volume');
const volumeSlider = document.querySelector('.advanced-controls-slider');
const volumeProgress = document.querySelector('.advanced-controls-slider__progress');
const playListContainer = document.querySelector('.advanced-list');
const playListSongs = document.querySelectorAll('.advanced-list__item');
const songName = document.querySelector('.advansed-name');
const currentLength = document.querySelector('.advanced-timeline__current');
const totalLength = document.querySelector('.advanced-timeline__length');
const timeline = document.querySelector('.advanced-timeline__line');
const timelineWidth = window.getComputedStyle(timeline).width;
const timelineProgress = document.querySelector('.advanced-timeline__progress');

let isPlay = false;
let playNum = 0;

const audio = new Audio(playList[playNum].src);

audio.addEventListener('loadeddata', () => {
	songName.textContent = playList[playNum].title;
	totalLength.textContent = getTimeCodeFromNum(audio.duration);
	audio.currentTime = 0;
	audio.volume = .25;
}); 

function playAudio() {
	if (!isPlay) {
		isPlay = true;
		audio.play();
		songs[playNum].classList.add('active');
		playPause.classList.add('play');

		timeline.addEventListener('click', (event) => {	
			const timeToSeek = event.offsetX / parseInt(timelineWidth) * audio.duration;
			audio.currentTime = timeToSeek;
		});

		setInterval(() => {
			timelineProgress.style.width = audio.currentTime / audio.duration * 100 + '%';
			currentLength.textContent = getTimeCodeFromNum(audio.currentTime);
		}, 500); // updating progress-bar every 0.5s
	} else {
		isPlay = false;
		audio.pause();	
		songs[playNum].classList.remove('active');
		playPause.classList.remove('play');
	}
}

function getTimeCodeFromNum(num) {
	let seconds = parseInt(num);
	let minutes = parseInt(seconds / 60);
	seconds -= minutes * 60;
	const hours = parseInt(minutes / 60);
	minutes -= hours * 60;
 
	if (hours === 0) return `${minutes}:${(seconds % 60).toString().padStart(2, 0)}`;
	return `${hours.toString().padStart(2, 0)}:${minutes}:${(seconds % 60).toString().padStart(2, 0)}`;
}

function playNext() {
	songs[playNum].classList.remove('active');
	playNum = playNum < playList.length - 1 ? playNum += 1 : 0;
	isPlay = false;
	audio.src = playList[playNum].src;
	audio.currentTime = 0;
	playAudio();
}

function playPrev() {
	songs[playNum].classList.remove('active');
	playNum = playNum > 0 ? playNum -= 1 : playList.length - 1;
	isPlay = false;
	audio.src = playList[playNum].src;
	audio.currentTime = 0;
	playAudio();
}

audio.addEventListener('ended', playNext);
playPause.addEventListener('click', playAudio);
playNextButton.addEventListener('click', playNext);
playPrevButton.addEventListener('click', playPrev);
volumeButton.addEventListener('click', () => {
	volumeButton.classList.toggle('off')
	if (audio.volume === 0) {
		audio.volume = .25
		volumeProgress.style.width = 25 + '%';
	} else {
		audio.volume = 0; 
		volumeProgress.style.width = 0; 
	}
});
volumeButton.addEventListener('mouseover', () => {
	volumeSlider.classList.add('active');
});
volumeButton.addEventListener('mouseout', () => {
	volumeSlider.classList.remove('active');
});
volumeSlider.addEventListener('mouseover', () => {
	volumeSlider.classList.add('active');
});
volumeSlider.addEventListener('mouseout', () => {
	volumeSlider.classList.remove('active');
});
volumeSlider.addEventListener('click', (event) => {
	const volumeSliderWidth = window.getComputedStyle(volumeSlider).width;
	const newVolume = event.offsetX / parseInt(volumeSliderWidth);
	audio.volume = newVolume;
	volumeProgress.style.width = newVolume * 100 + '%';
});
playListContainer.addEventListener('click', (event) => {	
	const value = event.target.dataset.value;
	if (songs[value].classList.contains('active')) {
		songs[value].classList.remove('active');
		isPlay = true;
		playAudio();
	} else {
		songs[playNum].classList.remove('active');
		playNum = +value;
		audio.src = playList[playNum].src;
		isPlay = false;
		audio.currentTime = 0;
		playAudio();
	}
});
// --------------------------------------------------------------------