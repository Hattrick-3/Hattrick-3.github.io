$(document).ready(function() {
  var error = $("#error");
  

  $('input').keyup((function(e) {
    if (error.is(":visible")) {
      error.hide();
    }
  }))





  $("#changePasswordForm").submit(function(e) {
      var password = $("#password").val();
      var confirmPassword = $("#confirmPassword").val();

      if (!password || password.length === 0) {
        showErrorMessage(translateMessage.required);
        return false;
      }

      if (!(password.length >= 6 && password.length <= 80)) {
        showErrorMessage(translateMessage.passwordLength);
        return false;
      }

      if (password !== confirmPassword) {
        showErrorMessage(translateMessage.passwordMatch);
        return false;
      }

      var regex = new RegExp('^(?=.*?[\\w])(?=.*?[0-9])(?=.*?[!@#$%&*])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^a-zA-Z0-9\\s]).{6,50}$');
      if (!regex.test(password)) {
        showErrorMessage(translateMessage.passwordRegExp);
        return false;
      }

      return true;

      function showErrorMessage(message) {
          error.text(message);
          error.show();
          $("html, body").animate({scrollTop: error.offset().top}, 'slow');
      }
  });
});
