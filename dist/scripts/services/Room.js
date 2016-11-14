(function () {
    function Room($firebaseArray) {
        var ref = firebase.database().ref('rooms');
        var rooms = $firebaseArray(ref);
        var addRoom = function(newRoom) {
            rooms.$add(newRoom);
        }
        return {
            addRoom: addRoom,
            all: rooms
        };        
        function addRoom(newRoom) {
            rooms.$add(newRoom);
        };
    }
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();