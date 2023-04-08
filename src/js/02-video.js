import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(Math.round(seconds))
    );
    console.log('played the video!', Math.round(seconds));
  }, 1000)
);

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time'))
);
