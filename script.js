
// const labels =document.querySelectorAll('.form-control label')

// labels.forEach(label => {
//     label.innerHTML = label.innerText
//     .split('')
//     .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
//     .join('')
// })

// const texts =document.querySelectorAll('.form-control label')

// texts.forEach(text => {
//     text.innerHTML = text.innerText
//     .split('')
//     .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
//     .join('')
// })  


const left = document.querySelector('.left')
const right = document.querySelector('.right')
const flights =document.querySelector('.flights')

left.addEventListener('mouseenter', () => flights.classList.add('hover-left'))
left.addEventListener('mouseleave' , () => flights.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => flights.classList.add('hover-right'))
right.addEventListener('mouseleave', () => flights.classList.remove('hover-right'))

// const sounds = document.querySelector('natural')

// sounds.forEach(sound => {
//     const btn = document.createElement('button')
//     btn.classList.add('btn') 

//     btn.innerText = sound

//     btn.addEventListener('click', () => {
//         stopSongs()

//         document.getElementById(sound).play()
//     })

//     document.getElementById('buttons').appendChild(btn)
// })

// function stopSongs() {
//     sounds.forEach(sound => {
//         const song = document.getElementById(sound)

//         song.pause()
//         song.currentTime = 0;
//     })
// }
let playBtn = document.getElementById('button')
let audoPlayer = document.getElementById('natural')
let isPlaying = false
playBtn.addEventListener('click', (e) => {
   console.log(playBtn.innerHTML);
    if (isPlaying) {
       audoPlayer.pause() 
       playBtn.innerHTML=`<i class="fas fa-volume-mute"></i>`
    }else{
        audoPlayer.play()
       playBtn.innerHTML=`<i class="fas fa-volume-up"></i>`


    }

    isPlaying = !isPlaying 
  })
//   <i class="fas fa-volume-mute"></i>