var input = document.querySelector('.input');
var area = document.querySelector('textarea');

input.addEventListener('keyup', function (ev) {
    var b;
    //     area.value = `key: ${ev.key}
    // keyCode: ${ev.keyCode}
    // code: ${ev.code}
    // which: ${ev.which}
    // charCode: ${ev.charCode}`

    //     var a = JSON.stringify(ev);
    //     console.log(a)
    for (key in ev) {
        b += `${key}: ${ev.key} 
`
    }
    area.value = b;

})
