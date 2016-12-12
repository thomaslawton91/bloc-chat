(function() {
  function Message($firebaseArray) {
    var roomRef = firebase.database().ref().child('messages').orderByChild('roomId');
    var ref = firebase.database().ref().child('messages')
    // getvar getMessages = Room.getMessages;
    var messages = $firebaseArray(ref);  
    var getMessages = function(roomId) {
            return $firebaseArray(ref.equalTo(roomId));
        }
    return {
        getByRoomId: function(roomId) {
            return $firebaseArray(roomRef.equalTo(roomId));
        },
        send: function(newMessage) {
            messages.$add(newMessage);
        }
    };
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();