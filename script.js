var songs = document.querySelectorAll(".song");
songs.forEach((song)=>{
    song.addEventListener('mouseenter', ()=>{
        var audio = song.querySelector("audio");
        audio.play();
        audio.loop = true;
    })
    song.addEventListener('mouseleave', ()=>{
        var audio = song.querySelector("audio");
        audio.pause();
    })
})

