describe("Test controller avec service Mocké", function(){
    var rootScope, scope, controller, CameraSrvMock;
    var DEFERRED_OK = 0;
    var DEFERRED_KO = 1;
    var deferredOut = DEFERRED_OK;

    beforeEach(module('Selfie'));

    beforeEach(inject(function($rootScope, $controller, $q) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        controller = $controller;

        CameraSrvMock = {
        getPicture: function(){
                // mock promise
                var deferred = $q.defer();
                
                switch (deferredOut) {
                case DEFERRED_KO:
                    deferred.reject('KO IMAGE KO');
                    break;
                case DEFERRED_OK:
                    deferred.resolve('Image OK');
                    break;
                default:
                    deferred.reject('????????');
                    break;
                }
                return deferred.promise;
            }            
        };
    }));  

    it('Test promise est OK', function() {
        deferredOut = DEFERRED_OK;
        controller("CameraController as CamCtrl", {
                $scope: scope,
                CameraSrv: CameraSrvMock
            });
            scope.CamCtrl.takePicture();
            scope.$digest();
            expect(scope.CamCtrl.imageURI).toBe('Image OK')
    });

    it('Test promise est KO', function() {
    deferredOut = DEFERRED_KO;
        controller("CameraController as CamCtrl", {
            $scope: scope,
            CameraSrv: CameraSrvMock
        });
        scope.CamCtrl.takePicture();
        scope.$digest();
        expect(scope.CamCtrl.imageURI).toBe('KO IMAGE KO')
    });
});