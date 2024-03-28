function togglePopup() {
    var popup = document.getElementById('popup');
    var overlay = document.querySelector('.overlay');
    popup.classList.toggle('active');
    overlay.classList.toggle('active');
}