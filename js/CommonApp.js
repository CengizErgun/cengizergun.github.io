var CommonApp = function () {
    var _BlockUI = function () {
        $.blockUI({
            message: '<p>Loading...</p>'
        });
    };

    return {

        BlockUI: function () {
            _BlockUI();
        },
        DisplayPopupNotification: function (messagetype, message, messagetitle) {
            swal({
                title: messagetitle,
                text: message,
                icon: messagetype,
                width: '600px',
                heightAuto: true
            });

        }
     
    }
}();