(function () {
    function NameModalCtrl($scope, $uibModalInstance, $cookieStore, $cookies) {
        $scope.username = '';
        $scope.save = function(username) {
            if ($scope.username === '') {
                alert('Please enter a valid username');
            } else {
            $cookies.put('blocChatCurrentUser', $scope.username);
            $uibModalInstance.close();
            };
        };
    }
    angular
        .module('blocChat')
        .controller('NameModalCtrl', ['$scope', '$uibModalInstance', '$cookieStore', '$cookies', NameModalCtrl]);
})();