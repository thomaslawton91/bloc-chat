var config = {
    apiKey: "AIzaSyCm4s2lame6SbSmAqvBt4da_CoAvexdtHM",
    authDomain: "bloc-chat-8fa2b.firebaseapp.com",
    databaseURL: "https://bloc-chat-8fa2b.firebaseio.com",
    storageBucket: "bloc-chat-8fa2b.appspot.com",
    messagingSenderId: "423994139017"
  };
firebase.initializeApp(config);

(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'RoomCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }    
    
    angular
        .module('blocChat', ['firebase', 'ui.router'])
        .config(config);
})();

