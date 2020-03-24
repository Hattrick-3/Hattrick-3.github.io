var input = document.querySelector('.input');
var area = document.querySelector('textarea');

input.addEventListener('keyup', function () {
    area.value = input.value
})
