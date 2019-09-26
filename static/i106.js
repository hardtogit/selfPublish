iweb.controller('i106', function($scope) {
  $scope.entity={}
  $scope.openLeft=function(){
    window.open($scope.entity.leftUrl,'_blank')
  }
  $scope.openRight=function(){
    window.open($scope.entity.rightUrl,'_blank')
  }
    apiconn.state_changed_handler = function () {
        if (apiconn.conn_state == "LOGIN_SCREEN_ENABLED") {
            window.ajax({
                obj:'user',
                act:'joinread',
                location:'pc',
            },function (jo) {
                $scope.entity=jo.info
            })
        }
    }
})
