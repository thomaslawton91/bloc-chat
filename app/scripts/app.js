(function () {
    function config($stateProvider, $locationProvider) {
        var config = {
            apiKey: "AIzaSyCm4s2lame6SbSmAqvBt4da_CoAvexdtHM",
            authDomain: "bloc-chat-8fa2b.firebaseapp.com",
            databaseURL: "https://bloc-chat-8fa2b.firebaseio.com",
            storageBucket: "bloc-chat-8fa2b.appspot.com",
            messagingSenderId: "423994139017"
        };
        firebase.initializeApp(config);
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('rooms', {
                url: '/',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/rooms.html'
            });
    }
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            var modalInstance = $uibModal.open({
                animation: true,
                size: 'sm',
                templateUrl: '/templates/nameModal.html',
                controller: 'NameModalCtrl'
            });
            modalInstance.result.then(function (selectedItem) {
                this.selected = selectedItem;
            });
        };

    }
    angular
        .module('blocChat', ['firebase', 'ui.router', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();