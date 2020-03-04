$(document).ready(function () {
  var form = $('form');
  if (form[0]) {
    form.submit(function () {
      $('button[type="submit"]').attr('disabled', true);
    });
  }
});