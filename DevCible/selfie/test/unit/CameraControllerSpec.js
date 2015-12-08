describe('Unit: CameraController', function() {
    // Load the module to test, add your module name in here!
    beforeEach(module('Selfie'));

    var ctrl, scope;

    // inject the $controller and $rootScope services
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('CameraController as CamCtrl', {
            $scope: scope
        });
    }));
    
    it('should be able to take a picture', function() {
        scope.CamCtrl.takePicture();
        scope.$digest();  
        
        console.log(scope.CamCtrl.imageURI);
        
        expect(scope.CamCtrl.imageURI).toBeDefined();
    });    
});