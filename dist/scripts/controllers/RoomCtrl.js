(function () {
    function RoomCtrl(Room, $uibModal) {
        this.list = Room;
        this.openModal = function () {
            console.log('Modal open');
                var modalInstance = $uibModal.open({
                animation: true,
                size: 'sm',
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl'
            });
                modalInstance.result.then(function(selectedItem) {
                    this.selected = selectedItem;
                    console.log(Room);
                    Room.addRoom(selectedItem);
                     
                });
            };
        };
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();