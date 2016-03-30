/**
 * Created by Tony on 16/3/29.
 */
/**
 * 系统设置
 * create by Tony
 */

angular.module('ctrl-systemsettings',[])
.controller('SystemSettingsCtrl',['$scope',function($scope){
    $scope.sysSettingData = {};

    //保存设置
    $scope.saveSettings = function(sysSetting){
        var settingsData = sysSetting;

        //保存用户设置到本地配置文件

        console.log(settingsData);
    }
}])