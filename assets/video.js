// TODO: Replace ID-based selectors (e.g., #muteToggle, #playPauseToggle)
// with class-based selectors + scoped logic using closest().
// This currently works because each HTML page is isolated,
// but it's fragile and not reusable. Refactor post-launch.

const video = document.getElementById('axiaVideo');
const muteToggle = document.getElementById('muteToggle');
const playPauseToggle = document.getElementById('playPauseToggle');
const muteIcon = muteToggle.querySelector('img');
const playPauseIcon = playPauseToggle.querySelector('img');
const playBtn = document.getElementById('videoPlayBtn');
const replayBtn = document.getElementById('videoReplayBtn');
const overlay = document.getElementById('videoOverlay');
const replayOverlay = document.getElementById('videoReplay');
const controls = document.querySelector('.video-controls');

window.addEventListener('DOMContentLoaded', () => {
  overlay.hidden = false;
  replayOverlay.hidden = true;
  controls.hidden = true;

  if (!video.paused) {
    video.pause();
  }
});

playBtn.addEventListener('click', () => {
  video.play();
  overlay.hidden = true;
  controls.hidden = false;
});

replayBtn.addEventListener('click', () => {
  video.currentTime = 0;
  video.play();
  replayOverlay.hidden = true;
  controls.hidden = false;
});

muteToggle.addEventListener('click', () => {
  video.muted = !video.muted;

  muteIcon.src = video.muted
    ? '/assets/images/icons/speaker-off.svg'
    : '/assets/images/icons/speaker-on.svg';

  muteToggle.setAttribute('aria-pressed', String(video.muted));
  muteToggle.setAttribute(
    'aria-label',
    video.muted ? 'Unmute video' : 'Mute video'
  );
});

playPauseToggle.addEventListener('click', () => {
  const isPaused = video.paused;

  if (isPaused) {
    video.play();
    playPauseIcon.src = '/assets/images/icons/pause.svg';
    playPauseToggle.setAttribute('aria-label', 'Pause video');
    playPauseToggle.setAttribute('aria-pressed', 'false');
  } else {
    video.pause();
    playPauseIcon.src = '/assets/images/icons/play.svg';
    playPauseToggle.setAttribute('aria-label', 'Play video');
    playPauseToggle.setAttribute('aria-pressed', 'true');
  }
});

video.addEventListener('ended', () => {
  replayOverlay.hidden = false;
});
