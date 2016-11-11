(function () {
    function ModalCtrl($uibModalInstance) {
        this.newRoom = {};
        this.save = function() {
            $uibModalInstance.close(this.newRoom)
        };
        this.cancel = function() {
            console.log("cancel");
            $uibModalInstance.close();
        };
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);
})();