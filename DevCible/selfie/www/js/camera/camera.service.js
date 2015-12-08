(function() {
    'use strict';

    angular.module('Selfie.Camera.module').
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
                  q.reject("Fatal error: navigator.camera.getPicture()");                                 
                }
                
                return q.promise;
            }
        }
    }
})();