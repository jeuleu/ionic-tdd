describe("Unit: CameraService (Mock)", function(){
    var rootScope, scope, ctrl, CameraSrvMock;

    var DEFERRED_OK = 0;
    var DEFERRED_KO = 1;
    var deferredOut = DEFERRED_OK;
    
    beforeEach(module('Selfie'));


    beforeEach(inject(function($rootScope, $controller, $q) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        ctrl = $controller;

        CameraSrvMock = {
            getPicture: function(){
                // mock promise
                var deferred = $q.defer();
                
                switch (deferredOut) {
                    case DEFERRED_OK:
                        deferred.resolve('Image OK');
                    break;

                    case DEFERRED_KO:
                        deferred.reject('KO-Image-KO');
                    break;
                    
                    default:
                        deferred.reject('????????');
                    break;
                }
                return deferred.promise;
            }            
        };
    }));   
    

    it('getPicture should return Image OK in case of success', function() {
        deferredOut = DEFERRED_OK;
        
        ctrl("CameraController as CamCtrl", {
            $scope: scope,
            CameraSrv: CameraSrvMock
        });
        
        scope.CamCtrl.takePicture();
        scope.$digest();
        expect(scope.CamCtrl.imageURI).toBe('Image OK')
    });
    
    it('getPicture should return KO-Image-KO in case of failure', function() {
        deferredOut = DEFERRED_KO;
        
        ctrl("CameraController as CamCtrl", {
            $scope: scope,
            CameraSrv: CameraSrvMock
        });
        
        scope.CamCtrl.takePicture();
        scope.$digest();
        expect(scope.CamCtrl.imageURI).toBe('img/ionic.png');
    });
});