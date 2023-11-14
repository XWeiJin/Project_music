//select DOM Element

const musicContainer = document.getElementById('music-container')
const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const title = document.getElementById('title')
const cover = document.getElementById('cover')
const musicLinks = document.querySelectorAll('a[data-song]');

musicLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // 阻止链接的默认行为

    const song = this.getAttribute('data-song'); // 获取data-song属性的值
    loadSong(song); // 调用音乐播放器的loadSong函数，加载选定的歌曲
    playSong(); // 调用音乐播放器的playSong函数，播放选定的歌曲
  });
});
// songs title
const songs = ['詹雯婷 - 訣愛','YUQI - Flowers','五月天 -  將軍令','Taylor Swift - Love Story','YOASOBI - アイドル','黃霄雲 - 還可以愛嗎','Lady Gaga - Always Remember Us This Way','eill - フィナーレ','黃霄雲 - 要不然我們就這樣一萬年','LiSA - 往け','Avicii - Waiting For Love','優里 - メリーゴーランド','Frozen - Let It Go','米津玄師 -  灰色と青','三浦サリー - アイシテル','Shakira - Try Everything','Coldplay - Hymn For The Weekend','界 - 袁娅维','LiSA - 炎','薇爾莉特 - 僕が死のうと思ったのは','黃霄雲 - 星辰大海','Coldplay - Paradise','DAOKO × 米津玄師 - 打上花火','YOASOBI - 怪物','小さな恋のうた - by天月','YOASOBI - 祝福','Justin Bieber - Sorry','IU - eight','Avicii - Broken Arrows','G.E.M. - 來自天堂的魔鬼 AWAY','Coldplay - A Sky Full Of Stars','eill - プレロマンス','IU - Blueming','Taylor Swift - All Too Well','伍佰 - 愛你一萬年','eill - 片っぽ','IU - above the time','G.E.M. - 光年之外','Lady Gaga - Bad Romance','(G)I-DLE - Queencard','BLACKPINK - DDU-DU DDU-DU','Kvi Baba - TOMBI','Justin Bieber - Love Yourself','(G)I-DLE - TOMBOY','張碧晨、毛不易 - 黑月光','Sia - Unstoppable','Ailee - I will show you','BLACKPINK - How You Like That','周杰倫 - 手寫的從前','Avicii - The Nights','BTS - Butter','韋禮安 - 如果可以','TAEYANG - EYES, NOSE, LIPS','Girls Generation - FOREVER 1','Taylor Swift - Blank Space','BLACKPINK - BOOMBAYAH','米津玄師 - Lemon','(G)I-DLE - Nxde','LiSA - 紅蓮華','BTS - Dynamite','優里 - レオ','周杰倫 - 告白氣球','伍佰 - 挪威的森林','五月天 - 後來的我們','Lady Gaga - Poker Face','Ailee - 첫눈처럼 너에게 가겠다','BTS - FIRE','IU - heart','IU - Nitpicking','周杰倫 - 稻香','I.O.I - I Love You, I Remember You','G.E.M. - 泡沫','優里 - 花鳥風月','Adele - Rolling in the Deep','IU - Celebrity','鈴木愛理 - heart notes','柯柯柯啊 - 櫻花樹下的約定','五月天 - 乾杯','伍佰 - Last dance','Justin Bieber - Baby ft. Ludacris'];

let songIndex = 1

// load songs into DOM
loadSong(songs[songIndex])

// update songs detail

function loadSong(song) {
  title.innerText = song
  audio.src = `./music/${song}.mp3`
}

//`./musics/${song}.mp3`="./musics/"+song+".mp3"
// Event listener
//() =>{} = function fn(){}
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')

  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

// play song function

function playSong() {
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')
  audio.play()
}

// pause song function

function pauseSong() {
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')
  playBtn.querySelector('i.fas').classList.add('fa-play')
  audio.pause()
}

// change song

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

function prevSong() {
  songIndex--

  if (songIndex < 0) {
    songIndex = songs.length - 1
  }

  loadSong(songs[songIndex])

  playSong()
}

function nextSong() {
  songIndex++

  if (songIndex > songs.length - 1) {
    songIndex = 0
  }

  loadSong(songs[songIndex])

  playSong()
}

// time update 
audio.addEventListener('timeupdate', updateProgress)

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
}

// click on progress bar 
progressContainer.addEventListener('click', setProgress)

function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickX / width) * duration
}

// songs end
audio.addEventListener('ended', nextSong)