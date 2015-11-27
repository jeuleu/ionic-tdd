describe('Unit:CameraController', function() {
    // Load the module to test, add your module name in here!
    beforeEach(module('Selfie'));

    var ctrl, scope;
    

    // inject the $controller and $rootScope services
    // in the beforeEach block
    beforeEach(inject(function($controller, $rootScope) {

        // create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();

        ctrl = $controller('CameraController as CamCtrl', {
            $scope: scope
        });
    }));
    
    it('should have a Camera Controller', function() {
        expect(scope.CamCtrl).toBeDefined();
    });

    it('should be able to take a picture', function() {
        expect(scope.CamCtrl.takePicture).toBeDefined();
    });

});