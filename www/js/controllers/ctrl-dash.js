/**
 * Dashboard controller
 * Created by Tony on 16/3/31.
 */
angular.module('ctrl-dash', [])

.controller('DashCtrl',['$scope','$state',function($scope,$state){

  $scope.showDash = function(subModalIndex){
    $scope.isOne = false;
    $scope.isSecond = false;
    $scope.isThird = false;
    if(subModalIndex==1){
    //待办审批
      $scope.isOne = true;
      $scope.isSecond = false;
      $scope.isThird = false;
      //跳转到待办页
      $state.go('tab.dash.items',{pageId:'1'});
       //console.log(1);
    }else if(subModalIndex==2){
    //已处理
      $scope.isOne = false;
      $scope.isSecond = true;
      $scope.isThird = false;
    //console.log(2);
      $state.go('tab.dash.items',{pageId:'2'});
    }else{
      //已处理
      $scope.isOne = false;
      $scope.isSecond = false;
      $scope.isThird = true;
    //console.log(3);
      $state.go('tab.dash.items',{pageId:'3'});
    }
    $scope.tab = subModalIndex;
  };
    $scope.showDash(1);

    $scope.nameText = "";
}])

.controller('DashItemCtrl',['$scope','$stateParams','Bills',function($scope,$stateParams,Bills){
    //console.log($stateParams.pageId);
    //console.log($scope.nameText);
    $scope.nameText = $stateParams.pageId;
    $scope.billItems = Bills.all();
    $scope.remove = function (billItem) {
      Bills.remove(billItem);
    };

    $scope.billItem = Bills.get($stateParams.billItemId);
  }])

  .controller('DashItemDetialsCtrl',['$scope','$stateParams','Bills',function($scope,$stateParams,Bills){
    //console.log($stateParams.pageId);
    //console.log($scope.nameText);
    //$scope.nameText = $stateParams.pageId;
    $scope.billItem = Bills.get($stateParams.billItemId);
  }])


