(function () {
    function RoomCtrl(Room) {
        
        this.list = Room;

    };

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();