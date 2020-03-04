$(document).ready(function () {
  var redirectURL = '';
  var redirectBackURL = '';

  $('.backToLogin').click(function () {
    if (redirectURL) {
      window.location = decodeURIComponent(redirectURL);
    } else {
      window.history.back();
    }
  });

  $('.backToPreviousPage').click(function () {
    if (redirectBackURL) {
      window.location = decodeURIComponent(redirectBackURL);
    } else {
      window.history.back();
    }
  });

  function makeRedirectURLfromLocation() {
    var url = '';
    var search = window.location.search;

    if (search) {
      var searchArray = search.split('?')[1].split('&');

      for (var i = 0; i < searchArray.length; i++) {
        var temp = searchArray[i].split('=');
        if (temp[0] === 'redirect_url' || temp[0] === 'redirect_uri') {
          url = temp[1];
        }
      }
    }

    return url;
  }

  function makePreviousURLfromLocation() {
    var url = '';
    var search = window.location.search;

    if (search) {
      var searchArray = search.split('?')[1].split('&');

      for (var i = 0; i < searchArray.length; i++) {
        var temp = searchArray[i].split('=');
        if (temp[0] === 'back_url') {
          url = temp[1];
        }
      }
    }

    return url;
  }

  function makeRedirectURLforMobileApp() {
    var url = '';
    var search = window.location.search;

    if (search) {
      var searchArray = search.split('?')[1].split('&');
      var array = [];
      var redirect = '';

      for (var i = 0; i < searchArray.length; i++) {
        var temp = searchArray[i].split('=');
        if (temp[0] !== 'loginredirecturl') {
          array.push(temp.join('='));
        } else {
          redirect = temp[1];
        }
      }

      if (redirect) {
        url = redirect + (redirect.indexOf('?') !== -1 ? '&' : '?') + array.join('&');
      }
    }

    return 0;
  }

  function initialize() {
    redirectURL = makeRedirectURLfromLocation();

    if (!redirectURL) {
      redirectUrl = makeRedirectURLforMobileApp();
    }

    if (!redirectURL) {
      var url = $('#redirectUrl').val();
      redirectURL = url;
    }

    if (!redirectURL) {
      redirectURL = localStorage.getItem('redirect_url');
    }

    localStorage.setItem('redirect_url', redirectURL || '');


    redirectBackURL = makePreviousURLfromLocation();

    if (!redirectBackURL) {
      redirectBackURL = localStorage.getItem('back_url');
    }

    localStorage.setItem('back_url', redirectBackURL || '');
  }

  initialize();
  setTimeout(function () { window.scrollTo(0, 1) }, 100);
});
