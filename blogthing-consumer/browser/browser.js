(function () {
  "use strict";

  var $ = require('jQuery')
    ;

  function run() {
    $('body').on('click', '.js-login a', function (ev) {
      var win
        ;

      ev.preventDefault();
      ev.stopPropagation();

      window.oauthCallback = function () {
        console.log('oauth callback complete');
        win.close();
        window.oauthCallback = null;
      };

      win = window.open(
          '/login?oauthCallback=oauthCallback'
        , 'oauthLogin'
        , 'width=300,height=300,location=no'
      );
    });
  }

  $(run);
}());