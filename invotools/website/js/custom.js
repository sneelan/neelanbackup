/* written by neelan */
$(document).ready(function() {
  $('a.scroll-link-js').on('click', function(event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  if (!getCookie('InvoToolsCookie')) {
      document.getElementById('cookieConsent').classList.remove('d-none');
  }

  document.getElementById('acceptCookie').addEventListener('click', function () {
      setCookie('InvoToolsCookie', 'true', 365);
      document.getElementById('cookieConsent').classList.add('d-none');
  });

  function setCookie(name, value, days) {
      var expires = "";
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
  }
});