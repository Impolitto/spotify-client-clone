// Play/Pause functionality
const playPauseBtn = document.querySelector('.play-pause-btn');
const playPauseIcon = playPauseBtn.querySelector('i');
let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    } else {
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }
});

// Progress bar functionality
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress-filled');

progress.addEventListener('click', (e) => {
    const progressWidth = progress.offsetWidth;
    const clickX = e.offsetX;
    const percentage = (clickX / progressWidth) * 100;
    progressFilled.style.width = percentage + '%';
});

// Volume bar functionality
const volumeBar = document.querySelector('.volume-bar');
const volumeFilled = document.querySelector('.volume-filled');

volumeBar.addEventListener('click', (e) => {
    const volumeWidth = volumeBar.offsetWidth;
    const clickX = e.offsetX;
    const percentage = (clickX / volumeWidth) * 100;
    volumeFilled.style.width = percentage + '%';
});

// Like button functionality
const likeBtn = document.querySelector('.player-left .fa-heart');
let isLiked = false;

likeBtn.addEventListener('click', () => {
    isLiked = !isLiked;
    if (isLiked) {
        likeBtn.classList.remove('far');
        likeBtn.classList.add('fas');
        likeBtn.style.color = '#1db954';
    } else {
        likeBtn.classList.remove('fas');
        likeBtn.classList.add('far');
        likeBtn.style.color = '#b3b3b3';
    }
});

// Card play button functionality
const cardPlayBtns = document.querySelectorAll('.card .play-btn');

cardPlayBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        // Simulate playing the track
        isPlaying = true;
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
        
        // Update track info (in a real app, this would come from the selected track)
        const card = btn.closest('.card');
        const trackName = card.querySelector('h3').textContent;
        const artistName = card.querySelector('p').textContent;
        
        document.querySelector('.track-info h4').textContent = trackName;
        document.querySelector('.track-info p').textContent = artistName;
    });
});

// Navigation menu functionality
const navItems = document.querySelectorAll('.nav-menu li');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// Simulate progress bar animation when playing
setInterval(() => {
    if (isPlaying) {
        const currentWidth = parseFloat(progressFilled.style.width) || 30;
        if (currentWidth < 100) {
            progressFilled.style.width = (currentWidth + 0.1) + '%';
        } else {
            progressFilled.style.width = '0%';
        }
    }
}, 100);
