(function () {
    function ModalCtrl($scope, $uibModalInstance) {
        $scope.userName = '';
        $scope.save = function() {
            $uibModalInstance.close($scope.userName);
            console.log($scope.userName);
        };
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', ModalCtrl]);
})();