iweb.controller('header', function($scope,$anchorScroll,$location,$rootScope) {
    //锚点
    $anchorScroll.yOffset = 47;//使用锚点时固定向下偏移47px
    $scope.goAnchor = function(anchor) {
        if(window.location.href.indexOf('company')!==-1){
            // 将location.hash的值设置为目标元素的id
            $location.hash(anchor);
            // 调用 $anchorScroll()
            $anchorScroll();
        }else{
            location.href='/company?anchor='+anchor
        }
    }

    if(window.location.href.indexOf('company')!==-1) {
        var anchor = getQueryString('anchor') || 'one'
        $location.hash(anchor);
        $anchorScroll();
    }
  // $scope.factoryTitle=[{}]
  $(function () {
      var path=window.location.href
     var arr=$('.navbar-nav>li>a')
     if($.fn.fullpage.destroy&&path.indexOf('i100')===-1){
       $.fn.fullpage.destroy('all');
     }
     var flag=true
      arr.each(function (index,item) {
        if(path.indexOf($(item).attr('data-href'))!==-1){
          $(item).addClass('active')
            flag=false
        }
      })
      if(flag){
          $(arr[0]).addClass('active')
      }
  if($(window).width()>993) {
    $('.dropdown').on('mouseover',function () {
      $($(this).find('.dropdown-menu')[0]).css('display','block')
    }).on('mouseout',function () {
      $($(this).find('.dropdown-menu')[0]).css('display','none')
    })
  }else{
      $('.arrow-menu').on('click',function (e) {
        e.stopPropagation()
        if($(this).parents('.dropdown').hasClass('open')){
          $('.dropdown').removeClass('open')
          $(this).removeClass('up')
          $(this).parents('.dropdown').removeClass('open')
        }else{
          $('.dropdown').removeClass('open')
          $(this).addClass('up')
          $(this).parents('.dropdown').addClass('open')
        }
      })
  }
  })
    // $rootScope.$on('STATE_CHANGED_HANDLER',function () {
    //     if (apiconn.conn_state == "LOGIN_SCREEN_ENABLED") {
    //         window.ajax({
    //             obj: 'user',
    //             act: 'factorread',
    //             location: 'pc'
    //         }, function (jo) {
    //             $scope.factoryTitle = jo.info.ftymanage
    //         })
    //     }
    // })
})
