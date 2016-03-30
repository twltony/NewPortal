/**
 * 首页控制器
 * Created by Tony on 16/3/29.
 */

angular.module('ctrl-mainmenu',[])
    .controller('MainMenuCtrl', ['$scope','$location', function ($scope,$location) {
        $scope.erpBtnClick = function(){
          $location.path('/tab/dash');
          console.log("erp");
        }
    }])
