(function () {
    function ChatModalCtrl($scope, $uibModalInstance) {
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
        .controller('ChatModalCtrl', ['$scope', '$uibModalInstance', ChatModalCtrl]);
})();