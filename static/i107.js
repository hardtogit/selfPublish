iweb.controller('i107', function($scope) {
  $scope.entity={}
  $scope.close=function(){
    history.go(-1)
  }
    apiconn.state_changed_handler = function () {
        if (apiconn.conn_state == "LOGIN_SCREEN_ENABLED") {
            window.ajax({
                obj:'user',
                act:'newsdetail',
                id:window.location.href.split('/')[window.location.href.split('/').length-1] ,
                location:'pc',
            },function (jo) {
                $scope.detail=jo.info
            })
            window.ajax({
                obj:'user',
                act:'newsbannerread',
                // id:$routeParams.id,
                location:'pc',
            },function (jo) {
                $scope.entity=jo.info
            })
        }
    }
})
