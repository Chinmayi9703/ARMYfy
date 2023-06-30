console.log("Welcome to 아미fy💜");

//Initialize the Variables
let audioElement = new Audio('songs/1.mp3');
let songIndex = 0;
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gify= document.getElementById('gify');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// let masterPlay= document.getElementById('masterPlay');
let songs=[{songName:"Take Two", filePath: "songs/1.mp3", coverPath:"covers/tt_cover.png"},
{songName:"We are Bulletproof - The Eternal", filePath: "songs/2.mp3", coverPath:"covers/weare.jpeg"},
{songName:"Run BTS", filePath: "songs/3.mp3", coverPath:"covers/runBTS.jpeg"},
{songName:"Permission To Dance", filePath: "songs/4.mp3", coverPath:"covers/PTD.png"},
{songName:"Louder Than Bombs", filePath: "songs/5.mp3", coverPath:"covers/LTB.jpeg"},
{songName:"Zero O' Clock", filePath: "songs/6.mp3", coverPath:"covers/Zero.jpeg"},
{songName:"Young Forever", filePath: "songs/7.mp3", coverPath:"covers/YF.png"}
]


songItems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName; 
});
//Listen To Events
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gify.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gify.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    });
} 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gify.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    
    if(songIndex>=6){
        songIndex = 0;
    } 
    else{
      songIndex  +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    
    if(songIndex<=0){
        songIndex = 6;
    } 
    else{
      songIndex  -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
