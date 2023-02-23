import { showTime } from "./mainInfo.js";
import { showDate } from "./mainInfo.js";
import { showGreeting } from "./mainInfo.js";
import { setBackground } from "./slider.js";
import { setCity } from "./weather.js";
import { getQuotes } from "./quote.js";
import { createPlaylist } from "./audioPlayer.js";
import { settingsOptions } from "./settings.js";
import { getLocalStorage } from "./localStorage.js";

showTime();
showDate();
showGreeting();
setBackground();
getQuotes();
createPlaylist();
settingsOptions();