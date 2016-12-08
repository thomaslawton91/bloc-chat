(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child('messages').orderByChild('roomId');
    // getvar getMessages = Room.getMessages;
    var messages = $firebaseArray(ref);  
    var getMessages = function(roomId) {
            return $firebaseArray(ref.equalTo(roomId));
        }
    return {
        getByRoomId: function(roomId) {
            return $firebaseArray(ref.equalTo(roomId));
        }
    };
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();