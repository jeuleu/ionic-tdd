describe('Unit: CameraServiceMock', function() {
    // Load the module to test, add your module name in here!
    beforeEach(module('Selfie'));
    
    var ctrl, scope;
    
    beforeEach(inject(function($rootScope, $controller, $q) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        ctrl = $controller;

        CameraSrvMock = {
            getPicture: function(){
                // mock promise
                var deferred = $q.defer();
                deferred.resolve('Image OK');
                return deferred.promise;
            }            
        };
    }));     

    it('should be able to take a picture', function() {
        ctrl("CameraController as CamCtrl", {
            $scope: scope,
            CameraSrv: CameraSrvMock
        });

        scope.CamCtrl.takePicture();
        scope.$digest();  
        expect(scope.CamCtrl.imageURI).toBe('Image OK');
    });
});