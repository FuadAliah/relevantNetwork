document.addEventListener("DOMContentLoaded", function () {
    let top = document.getElementById('top');
    let position = window.pageYOffset;

    if (position > 300) {
        top.classList.add('show');
    } else {
        top.classList.remove('show');
    }

});