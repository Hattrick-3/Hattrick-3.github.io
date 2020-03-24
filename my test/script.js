var input = document.querySelector('.input');
var area = document.querySelector('textarea');

input.addEventListener('keyup', function (ev) {
    area.value = input.value + ev.key + ev.keyCode;
    console.log(ev)
})
