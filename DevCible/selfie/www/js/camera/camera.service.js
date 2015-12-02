(function() {
    'use strict';

    angular.module('Selfie.Camera.modules').
        factory('CameraSrv', Camera);
    
    var injectParams = ["$q"];
    
    /** Functions code */    
    Camera.$inject = injectParams;
    function Camera ($q) {
        return {
            getPicture: function(options) {
              var q = $q.defer();

              try {
                  navigator.camera.getPicture(function(result) {
                    // Do any magic you need
                    q.resolve(result);
                  }, function(err) {
                    q.reject(err);
                  }, options);
              }
              catch(err) {
                  // BEURK ! Il faut mocker navigator.camera
                  q.reject("img/ionic.png");
              }

              return q.promise;
            }
        }
    }
})();
