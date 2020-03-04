$(document).ready(function () {
  var validationElements = $('.container-validation-password').children();
  var button = $('button[type=submit]')[0];
  var newPassword = document.getElementById('newPassword');
  var oldPassword = document.getElementById('oldPassword');
  var confirmNewPassword = document.getElementById('confirmNewPassword');

  var isShowNewPassword = false;
  var isShowOldPassword = false;
  var newPasswordMouseDown = false;
  var oldPasswordMouseDown = false;

  var validators = [
    function (value) {
      return value.length >= 6;
    },
    function (value) {
      return new RegExp('\\d').test(value);
    },
    function (value) {
      return new RegExp('[A-Z]').test(value);
    },
    function (value) {
      return new RegExp('[!@#$%&*]').test(value)
    }
  ];
  //checking for empty fields
  function checkParams() {
    if (newPassword.value.length && oldPassword.value.length) {
      button.removeAttr('disabled');
    } else {
      button.attr('disabled', 'disabled');
    }
  }

  function validatePassword() {
    var validatePassword = true;

    for (var i = 0; i < validators.length; i++) {
      if (validators[i](newPassword.value)) {
        validationElements[i].children[0].innerText = '✔';
        validationElements[i].classList.add('valid');
      } else {
        validationElements[i].children[0].innerText = '•';
        validationElements[i].classList.remove('valid');
        validatePassword = false;
      }
    }

    confirmNewPassword.value = newPassword.value;
    button.disabled = !validatePassword || !oldPassword.value;

    return validatePassword;
  }
  //checking for identical fields
  function comparePassword() {
    if (oldPassword.value === newPassword.value && newPassword.value.length && oldPassword.value.length) {
      button.disabled = true;
      document.querySelector('.errorBlock').style.display = 'block';
    } else {
      document.querySelector('.errorBlock').style.display = 'none';
    }
  }

  $('#newPassword').focus(function (e) {
    changeVisiblePassword(isShowNewPassword, e.target, $('#newPassword-show')[0]);
    $('#newPassword-show').css('opacity', '1');
  });

  $('#newPassword').blur(function (e) {
    if (newPasswordMouseDown) {
      e.preventDefault();
    } else {
      isShowNewPassword = false;
      changeVisiblePassword(isShowNewPassword, e.target, $('#newPassword-show')[0]);
      $('#newPassword-show').css('opacity', '0');
    }
  });

  $('#newPassword-show').click(function (e) {
    newPasswordMouseDown = false;
    isShowNewPassword = !isShowNewPassword;
    changeVisiblePassword(isShowNewPassword, $('#newPassword')[0], e.target);
    $('#newPassword')[0].focus();
  }.bind(this));

  $('#newPassword-show').mousedown(function (e) {
    newPasswordMouseDown = true;
  });

  $('#oldPassword').focus(function (e) {
    changeVisiblePassword(isShowOldPassword, e.target, $('#oldPassword-show')[0]);
    $('#oldPassword-show').css('opacity', '1');
  }.bind(this));

  $('#oldPassword').blur(function (e) {
    if (oldPasswordMouseDown) {
      e.preventDefault();
    } else {
      isShowOldPassword = false;
      changeVisiblePassword(isShowOldPassword, e.target, $('#oldPassword-show')[0]);
      $('#oldPassword-show').css('opacity', '0');
    }
  });

  $('#oldPassword-show').click(function (e) {
    oldPasswordMouseDown = false;
    isShowOldPassword = !isShowOldPassword;
    changeVisiblePassword(isShowOldPassword, $('#oldPassword')[0], e.target);
    $('#oldPassword')[0].focus();
  }.bind(this));

  $('#oldPassword-show').mousedown(function (e) {
    oldPasswordMouseDown = true;
  });

  $('#oldPassword').keyup(function () {
    validatePassword();
    comparePassword();
  });

  $('#newPassword').keyup(function () {
    validatePassword();
    comparePassword();
  });

  function changeVisiblePassword(isShow, input, eye) {
    if (isShow) {
      input.type = 'text';
      eye.src = '/passwordManagement/images/eye-off.svg';
    } else {
      input.type = 'password';
      eye.src = '/passwordManagement/images/eye.svg';
    }
  }
});