/**
 * 首页控制器
 * Created by Tony on 16/3/29.
 */

angular.module('ctrl-mainmenu',[])
    .controller('MainMenuCtrl', ['$scope','$state', function ($scope,$state) {
        $scope.erpBtnClick = function(){
          $state.go('tab.dash.items',{pageId:'1'});

        }
    }])
