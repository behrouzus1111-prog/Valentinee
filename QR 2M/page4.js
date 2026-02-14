const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');

// تنظیم ولوم تا آخر زیاد
video.volume = 1.0;

// پخش و توقف با کلیک روی دکمه پلی
playButton.addEventListener('click', function(e) {
    e.stopPropagation();
    if (video.paused) {
        video.play();
        playButton.classList.add('hidden');
    } else {
        video.pause();
        playButton.classList.remove('hidden');
    }
});

// کلیک روی خود ویدیو
video.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playButton.classList.add('hidden');
    } else {
        video.pause();
        playButton.classList.remove('hidden');
    }
});

// وقتی ویدیو تموم شد، دکمه پلی دوباره ظاهر بشه
video.addEventListener('ended', function() {
    playButton.classList.remove('hidden');
});

// وقتی ویدیو شروع به پخش کرد، دکمه پلی ناپدید بشه
video.addEventListener('play', function() {
    playButton.classList.add('hidden');
});

// وقتی ویدیو متوقف شد، دکمه پلی ظاهر بشه
video.addEventListener('pause', function() {
    playButton.classList.remove('hidden');
});

// تابع رفتن به صفحه بعدی
function goToNextPage() {
    window.location.href = 'page5.html';  // آدرس صفحه بعدی
}