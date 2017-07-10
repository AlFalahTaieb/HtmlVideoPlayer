//Get Element
const player=document.querySelector('.player');
const video=player.querySelector('.viewer');
const progress=player.querySelector('.progress');
const progressBar=player.querySelector('.progress__filled');

const toggle=player.querySelector('.toggle');
const skipButtons=player.querySelector('[data-skip]');
const ranges=player.querySelector('.player__slider');





//Build Function
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();

// if(video.paused){
// 	video.play();
// }else{
// 	video.pause();
// }
}
function updateButton() {
  const icon = this.paused ? '💜' : '💩';
  // console.log(icon);
  toggle.textContent = icon;
}

//hook up the event
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);