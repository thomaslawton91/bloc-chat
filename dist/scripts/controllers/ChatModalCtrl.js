(function () {
    function ModalCtrl($scope, $uibModalInstance) {
        $scope.newRoom = {};
        $scope.save = function() {
            $uibModalInstance.close($scope.newRoom);
            console.log($scope.newRoom);
        };
        $scope.cancel = function() {
            console.log("cancel");
            $uibModalInstance.close();
        };
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', ModalCtrl]);
})();