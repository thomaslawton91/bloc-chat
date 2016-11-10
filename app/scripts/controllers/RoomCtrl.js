(function () {
        function RoomCtrl(Room, $uibModal) {
            this.list = Room;
            this.addRoom = Room.addRoom;
            this.openModal = function () {
                var modalInstance = $uibModal.open({
                    animation: true,
                    size: 'sm',
                    templateUrl: '/templates/modal.html',
                    controller: 'ModalCtrl'
                });
            };
        };
    angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();