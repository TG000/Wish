import { Wish2DHorror } from "./Wish2DHorror.js";
import { playSound, stopSound } from "./engine/SoundHandler.js";

const canvas = document.createElement('canvas');
const container = document.querySelector('.container');
const btnList = document.querySelectorAll("button");
const creditsMenu = document.querySelector('.about');
const menu = document.querySelector(".menu");
const mainMenu = document.querySelector(".main-menu");
const introVid = document.querySelector('#intro');
const warnMenu = document.querySelector('.warning-menu');
const warnMenu2 = document.querySelector('.warning-menu-2nd');
const exitMenu = document.querySelector('exit');

var play = false;
var loaded = false;
var switching = false;
var previous = 0, counter = 1;
var bgSprites = [];

var introSound = new Audio('./assets/audio/background_music/ending_music.wav');
var warnSound = new Audio('./assets/audio/background_music/menu_warning_sound.wav');
var exitSound = new Audio('./assets/audio/background_music/menu_warning_sound.wav');
var mainMenuSound = new Audio('./assets/audio/background_music/main_menu.wav');
var btnInteract = new Audio('./assets/audio/background_music/menu_btn.wav');

introVid.addEventListener('play', function() {
    playSound(introSound);
});

introVid.addEventListener('ended', function() {
    stopSound(introSound);
    SwitchFade(introVid, container);
    playSound(warnSound);
    setTimeout(function() {
        SwitchFade(warnMenu, warnMenu2);
        setTimeout(function() {
            stopSound(warnSound);
            SwitchFade(warnMenu2, mainMenu);
            mainMenuSound.loop = true;
            playSound(mainMenuSound);
        }, 4000);
    }, 4000);
});

btnList[0].addEventListener('click', function() {
    Start();
});

btnList[4].addEventListener('click', function() {
    if (switching == false){
        playSound(btnInteract);
        SwitchFade(menu, creditsMenu);
    }
});

btnList[5].addEventListener('click', function() {
    if (switching == false){
        Exit();
    }
});

creditsMenu.addEventListener('click', function() {
    if (switching == false){
        playSound(btnInteract);
        SwitchFade(creditsMenu, menu);
    }
});

window.onload = function() {
    const screenResolution = {
        height: window.innerHeight,
        width: window.innerWidth
    }

    if (screenResolution.height < 649 || screenResolution.width < 1150) {
        window.location.replace('../../error.html');
    }
    else {
        LoadMenuAnim();
        MainMenuAnim();
    }
}

function LoadMenuAnim() {
    for (let i = 0; i < 502; i++) {
        bgSprites[i] = new Image();
        bgSprites[i].src = `./assets/img/background/Main_Menu/image${i+1}.png`;
        if (i == 501) {
            loaded = true;
        }
    }
}

function MainMenuAnim(time) {
    if (loaded == true) {
        if (play == false) {
            if ((time / 1000).toFixed(1) - previous >= 0.01) {
                if (counter < 500) {
                    counter++;
                }
                else {
                    counter = 0;
                }
                previous = (time / 1000).toFixed(1);
                mainMenu.style.backgroundImage = "url('" + bgSprites[counter].src + "')";
            }
            requestAnimationFrame(MainMenuAnim);
        }
    }
}

function SwitchFade(element, element2) {
    switching = true;
    let op = 1;  // initial opacity
    let timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);

    setTimeout(function() {
        let op2 = 0.1;  // initial opacity
        element2.style.display = 'flex';
        let timer2 = setInterval(function () {
            if (op2 >= 1){
                clearInterval(timer2);
                switching = false;
            }
            element2.style.opacity = op2;
            element2.style.filter = 'alpha(opacity=' + op2 * 100 + ")";
            op2 += op2 * 0.1;
        }, 10);
    }, 230);
}

function Start() {
    canvas.width = 1600;
    canvas.height = 900;
    document.body.appendChild(canvas);

    mainMenuSound.pause();
    new Wish2DHorror(canvas).start();
    setTimeout(() => {
        SwitchFade(container, canvas);
    }, 500);
}

export function ToMainMenu() {
    SwitchFade(canvas, container);
    playSound(mainMenuSound);
}

function Exit() {
    playSound(exitSound);
    SwitchFade(mainMenu, exitMenu);
    setTimeout(function() {
        window.close();
    }, 2000);
}