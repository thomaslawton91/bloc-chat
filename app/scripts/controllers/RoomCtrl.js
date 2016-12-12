(function () {
    function RoomCtrl(Room, Message, $uibModal, $scope) {
        this.list = Room.all;
        this.openModal = function () {
            console.log('Modal open');
                var modalInstance = $uibModal.open({
                animation: true,
                size: 'sm',
                templateUrl: '/templates/chatModal.html',
                controller: 'ChatModalCtrl'
            });
                modalInstance.result.then(function(selectedItem) {
                    this.selected = selectedItem;
                    Room.addRoom(selectedItem);
                     
                });
            };
        this.selectedRoom = function(rooms) {
            this.chosenRoom = rooms;
            this.messages = Message.getByRoomId(rooms.$id);
            return this.messages;
        };
        };
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$uibModal', '$scope', RoomCtrl]);
})();