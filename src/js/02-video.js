import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const PLAYER_CURRENT_TIME_KEY = "videoplayer-current-time";

const onTimeupdate = (data) => {
    const currentTimeupdate = data.seconds;
    localStorage.setItem('PLAYER_CURRENT_TIME_KEY', currentTimeupdate)
};

player.on('timeupdate', throttle(onTimeupdate, 1000));
player.setCurrentTime(localStorage.getItem('PLAYER_CURRENT_TIME_KEY'));