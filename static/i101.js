iweb.controller('i101', function($scope) {
  $scope.entity={}
    apiconn.state_changed_handler = function () {
        if (apiconn.conn_state == "LOGIN_SCREEN_ENABLED") {
            window.ajax({
                obj:'user',
                act:'companyread',
                location:'pc'
            },function (jo) {
                $scope.entity=jo.info
            })
        }
    }
})
