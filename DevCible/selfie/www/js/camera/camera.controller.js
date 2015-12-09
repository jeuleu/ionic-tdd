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
                allowEdit : false,
                targetWidth: 300,
                targetHeight: 300,
                saveToPhotoAlbum: false
            };

            vm.imageURI = 'img/ionic.png';

            CameraSrv.getPicture(options).then(function(imageURI) {
                vm.imageURI = imageURI;
                console.log(imageURI);
            }, function(err) {
                console.err('takePicture FAILED: ' + err);
            });
        }
    }
})();