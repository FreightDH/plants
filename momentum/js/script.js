import { showTime, showDate, showGreeting } from "./mainInfo.js";
import { setBackground, setBackgroundAPI } from "./slider.js";
import { setCity } from "./weather.js";
import { getQuotes } from "./quote.js";
import { createPlaylist } from "./audioPlayer.js";
import { settingsOptions } from "./settings.js";
import { getLocalStorage } from "./localStorage.js";

showTime();
showDate();
showGreeting();
getQuotes();
createPlaylist();
settingsOptions();