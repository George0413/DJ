
/********************************************************************
document.querySelector(".play").addEventListener("click",function() {

  var audio= new Audio('https://vincens2005.github.io/vr/Nyan%20Cat%20[original].mp3');

      if (audio.paused) {
        audio.play();

      }else{

        audio.pause();

      }


});



********************************************************************************/

var audio= new Audio('https://vincens2005.github.io/vr/Nyan%20Cat%20[original].mp3');

document.querySelector("#play").addEventListener("click",function() {
  audio.play();
});

document.querySelector("#stop").addEventListener("click",function() {
  audio.pause();
  audio.currentTime = 0;
});

document.querySelector("#volume").addEventListener("click",function() {
  audio.volume = 0.2;

});

document.querySelector("#volume2").addEventListener("click",function() {
  audio.volume = 1.0;

});



/****************************************************

function getVolume() {
  alert(vid.volume);
}

function setHalfVolume() {
  vid.volume = 0.2;
}

function setFullVolume() {
  vid.volume = 1.0;
}











document.querySelector("#volume").addEventListener("change",function() {
  audio.volume = parseFloat(volume.value / 10);

});




<audio controls>
  <source src="https://vincens2005.github.io/vr/Nyan%20Cat%20[original].mp3" type="audio/mpeg">
</audio>

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true)




function play() {
var audio = new Audio();
audio.play();
"http://www.noiseaddicts.com/samples_1w72b820/1456.mp3"
};
"http://www.noiseaddicts.com/samples_1w72b820/118.mp3"
**********************************************************************/
