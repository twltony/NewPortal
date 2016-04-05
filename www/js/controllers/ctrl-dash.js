/**
 * Dashboard controller
 * Created by Tony on 16/3/31.
 */
angular.module('ctrl-dash', [])

.controller('DashCtrl',['$scope',function($scope){

  $scope.showDash = function(subModalIndex){
    $scope.isOne = false;
    $scope.isSecond = false;
    $scope.isThird = false;
    if(subModalIndex==1){
    //待办审批
      $scope.isOne = true;
      $scope.isSecond = false;
      $scope.isThird = false;
       //console.log(1);
    }else if(subModalIndex==2){
    //已处理
      $scope.isOne = false;
      $scope.isSecond = true;
      $scope.isThird = false;
    //console.log(2);
    }else{
      //已处理
      $scope.isOne = false;
      $scope.isSecond = false;
      $scope.isThird = true;
    //console.log(3);
    }
    $scope.tab = subModalIndex;
  };
    $scope.showDash(1);
}])
