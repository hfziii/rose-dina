// FLYFIRE
// Mendapatkan semua elemen firefly
const fireflies = document.querySelectorAll('.firefly');

// Menetapkan posisi acak untuk setiap firefly
fireflies.forEach(firefly => {
    const randomTop = Math.random() * 100; // Menghasilkan angka acak antara 0 dan 100
    const randomLeft = Math.random() * 100; // Menghasilkan angka acak antara 0 dan 100
    firefly.style.top = `${randomTop}%`;
    firefly.style.left = `${randomLeft}%`;
});

// POP UP
const letterTrigger = document.getElementById("letter-trigger");
const popup = document.getElementById("popup");

letterTrigger.addEventListener("click", function() {
    popup.style.display = "block";
});

function closePopup() {
    popup.style.display = "none";
}

// MUSIC
// Ambil elemen audio
var audio = document.getElementById("audio");

// Tambahkan event listener untuk event "play"
audio.addEventListener("play", function() {
  // Set waktu pemutaran lagu (sekon)
  audio.currentTime = 66; // 
});
