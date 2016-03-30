angular.module('ctrl-login', [])
/**
 * 登录控制器
 * create by Tony
 */
.controller('LoginCtrl',['$scope','$state','$ionicPopup','$location',
        function($scope,$state,$ionicPopup,$location) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.login = function (user) {
        //检验账号密码是否为空
        if (typeof(user) == 'undefined' || user.username=='' || user.password =='') {
            $scope.showAlert('请输入账号和密码！');
        }
        else if(user.username.length <6){
            $scope.showAlert('账号不能少于6位');
        }
        else if(user.password.length <6){
            $scope.showAlert('密码不能少于6位');
        }
        //验证账号密码
        else if (user.username == '111111' && user.password == '111111') {
            //验证成功后重定向到主页
            $location.path('/leftslidemenu/main');
            //$state.go('app.main');
        } else {
            //验证失败弹出提示
            $scope.showAlert('账号或密码错误！');
        }
    }
    //--------------------------------------------
    //错误提示框
    //--------------------------------------------
    $scope.showAlert = function (msg) {
        var alertPopup = $ionicPopup.alert({
            title: '登录提示',
            template: msg
        });
    };
}])

    //登录页面tab控制器
.controller('loginTabCtrl',['$scope',function($scope){
        $scope.btnLoginClick = function(){
            $scope.isLoginActive = true;
            $scope.isSettingActive = false;
        }
        $scope.btnSettingClick = function(){
            $scope.isLoginActive = false;
            $scope.isSettingActive = true;
        }
    }])


;
