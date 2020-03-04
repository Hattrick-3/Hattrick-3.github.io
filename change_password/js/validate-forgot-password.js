$(document).ready(function () {
  var validationElements = $('.container-validation-password').children();
  var button = $('button[type=submit]')[0];
  var correctIconPassword = $('#password-correct')[0];
  var confirmPassword = document.getElementById('confirmPassword');
  var isShowPassword = false;
  var mouseDown = false;
  var validators = [
    function (value) { return value.length >= 6; },
    function (value) { return new RegExp('\\d').test(value); },
    function (value) { return new RegExp('[A-Z]').test(value); },
    function (value) { return new RegExp('[!@#$%&*]').test(value) }
  ];

  $('#password').keyup(function (e) {
    var validatePassword = true;

    for (var i = 0; i < validators.length; i++) {
      if (validators[i](e.target.value)) {
        validationElements[i].children[0].innerText = '•';
        validationElements[i].classList.add('valid');
      } else {
        validationElements[i].children[0].innerText = '•';
        validationElements[i].classList.remove('valid');
        validatePassword = false;
      }
    }

    confirmPassword.value = e.target.value;
    button.disabled = !validatePassword;
    correctIconPassword.style.display = validatePassword ? 'block' : 'none';
  }.bind(this));

  $('#password').focus(function (e) {
    correctIconPassword.style.opacity = 0;
    changeVisiblePassword(isShowPassword, e.target, $('#password-show')[0]);
    $('#password-show').css('opacity', '1');
  });

  $('#password').blur(function (e) {
    if (mouseDown) {
      e.preventDefault();
    } else {
      correctIconPassword.style.opacity = 1;
      isShowPassword = false;
      changeVisiblePassword(isShowPassword, e.target, $('#password-show')[0]);
      $('#password-show').css('opacity', '0');
    }
  });

  $('#password-show').click(function (e) {
    mouseDown = false;
    isShowPassword = !isShowPassword;
    changeVisiblePassword(isShowPassword, $('#password')[0], e.target);
  });

  $('#password-show').mousedown(function(e) {
    mouseDown = true;
  });

  function changeVisiblePassword(isShow, input, eye) {
    if (isShow) {
      input.type = 'text';
      eye.src = '/passwordManagement/images/eye-off.svg';
      input.focus();
    } else {
      input.type = 'password';
      eye.src = '/passwordManagement/images/eye.svg';
    }
  }
});
