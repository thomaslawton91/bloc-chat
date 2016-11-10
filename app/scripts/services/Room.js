(function () {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);
        Room.addRoom = function(newRoom) {
            rooms.$add(newRoom);
        };
        return {
            all: rooms
        };        
    }
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();