(function() {
    'use strict';
    
    angular.module('Selfie.Camera.module').
    	controller('CameraController', CameraCtrl);
        
    var injectParams = ["CameraSrv"];

    CameraCtrl.$inject = injectParams;
    function CameraCtrl(CameraSrv) {
        /* jshint validthis: true */			
        var vm = this;

        vm.takePicture = function() {
           var options = { 
                quality : 75, 
/*
                allowEdit : true,
*/
                allowEdit : false,
                targetWidth: 300,
                targetHeight: 300,
                saveToPhotoAlbum: false
            };

            CameraSrv.getPicture(options).then(function(resultImg) {
              console.log(resultImg);
              vm.imageURI = resultImg;
            }, function(err) {
              vm.imageURI = err;
            });
        }
    }
})();