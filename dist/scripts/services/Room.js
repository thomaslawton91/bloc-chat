(function () {
    function Room($firebaseArray) {
        var refRooms = firebase.database().ref('rooms');
        var rooms = $firebaseArray(refRooms);
        var addRoom = function (newRoom) {
            rooms.$add(newRoom);
        }
        var getRooms = function() {
            return {
                all: rooms
            };
        }
        return {
            getRooms: getRooms,
            addRoom: addRoom,
            all: rooms
        };
    }
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();