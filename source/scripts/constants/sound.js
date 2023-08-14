var bgm = document.createElement('audio');
bgm.src = './assets/audio/background_music/bgm_chapter1.wav';

var start = document.createElement('audio');
start.src = './assets/audio/background_music/start.wav';

var rain = document.createElement('audio');
rain.src = './assets/audio/ambience/rain.wav';

var walk = document.createElement('audio');
walk.src = './assets/audio/player_sfx/walk.wav';

var doorOpen = document.createElement('audio');
doorOpen.src = './assets/audio/interactical_sound_effect/door_open.wav';

var doorLock = document.createElement('audio');
doorLock.src = './assets/audio/interactical_sound_effect/door_lock.wav';

var jumpscare = document.createElement('audio');
jumpscare.src = './assets/audio/monster_sound/jumpscare.wav';

var end = document.createElement('audio');
end.src = './assets/audio/background_music/end.wav';

const sounds = [
    bgm, start, rain, walk, doorOpen, doorLock, jumpscare, end
];

for (const sound of sounds) {
    sound.preload = 'auto';
    sound.loop = true;
}

export const SYSTEM_SOUND = {
    bgm: bgm,
    start: start,
    rain: rain,
    walk: walk,
    doorOpen: doorOpen,
    doorLock: doorLock,
    jumpscare: jumpscare,
    end: end
}