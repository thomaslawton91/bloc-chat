(function () {
    function RoomCtrl(Room, Message, $uibModal, $scope, $cookies) {
        this.list = Room.all;
        this.openModal = function () {
            console.log('Modal open');
            var modalInstance = $uibModal.open({
                animation: true,
                size: 'sm',
                templateUrl: '/templates/chatModal.html',
                controller: 'ChatModalCtrl'
            });
            modalInstance.result.then(function (selectedItem) {
                this.selected = selectedItem;
                Room.addRoom(selectedItem);

            });
        };
        this.selectedRoom = function (rooms) {
            this.chosenRoom = rooms;
            this.messages = Message.getByRoomId(rooms.$id);
            return this.messages;
        };
        this.content = '';
        var currentTime = new Date();
        var sentTime = '' + currentTime.getHours() + ':' + currentTime.getMinutes();
        this.sendMessage = function() {
            Message.send({
                content: this.content,
                username: $cookies.get('blocChatCurrentUser'),
                roomId: this.chosenRoom.$id,
                sentAt: sentTime
            });
            console.log('clicked');
    };
    };
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$uibModal', '$scope', '$cookies', RoomCtrl]);
})();