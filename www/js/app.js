// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('PortalApp', ['ionic', 'app.controllers', 'app.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    //--------------
    //路由配置
    //--------------
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            //登录-tab
            .state('logintab', {
                url: '/logintab',
                templateUrl: 'templates/base-login.html',
                controller: 'loginTabCtrl',
                abstract: true
            })
            //登录-登录页面
            .state('logintab.login', {
                url: '/login',
                views: {
                    'loginContent': {
                        templateUrl: 'templates/Login/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            })
            //登录-系统配置页
            .state('logintab.systemsettings', {
                url: '/systemsettings',
                views: {
                    'loginContent': {
                        templateUrl: 'templates/Login/systemsettings.html',
                        controller: 'SystemSettingsCtrl'
                    }
                }

            })
            //左滑动栏root
            .state('leftslidemenu', {
                url: '/leftslidemenu',
                abstract: true,
                templateUrl: 'templates/base-leftmenu.html',
                controller: 'leftMenuCtrl'
            })
            //主页
            .state('leftslidemenu.main', {
                url: '/main',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/MainMenu/main.html',
                        controller: 'MainMenuCtrl'
                    }
                }
            })
            //左栏-关于系统页
            .state('leftslidemenu.about', {
                url: '/about',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/Tabs/about.html'
                    }
                }
            })
            //左栏-用户信息
            .state('leftslidemenu.userinfo', {
                url: '/userinfo',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/Tabs/userinfo.html'
                    }
                }
            })
            //左栏-系统设置
            .state('leftslidemenu.systemsettings', {
                url: '/systemsettings',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/Login/systemsettings.html'
                    }
                }
            })
            .state('leftslidemenu.playlists', {
                url: '/playlists',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/Tabs/playlists.html',
                        controller: 'PlaylistsCtrl'
                    }
                }
            })

            .state('leftslidemenu.single', {
                url: '/playlists/:playlistId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/Tabs/playlist.html',
                        controller: 'PlaylistCtrl'
                    }
                }
            })

            //审批页router
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/base-tabs.html'
            })
            .state('tab.dash', {
                url: '/dash',
                nativeTransitionsIOS: {
                  "type": "flip",
                  "direction": "left"
                },
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/Tabs/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })
           .state('tab.dash.items', {
                url: '/dash-items/:pageId',
                templateUrl: 'templates/Tabs/tab-dash-items.html',
                controller: 'DashItemCtrl'
            })
            .state('tab.billDetials',{
                url: '/dash-items-detials/:billItemId',
                templateUrl: 'templates/Tabs/tab-dash-items-detials.html',
                controller:'DashItemDetialsCtrl'
            })
            //.state('tab.dash.todo', {
            //  url: '/todo',
            //  nativeTransitionsIOS: {
            //    "type": "flip",
            //    "direction": "left"
            //  }
            //})

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/Tabs/tab-chats.html'
                        //controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/Tabs/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/Tabs/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/logintab/login');
        //$urlRouterProvider.otherwise('/tab/dash');
    })

/**
 * Views 配置
 */
  //.config(function($ionicConfigProvider) {
  //  $ionicConfigProvider.views.transition('ios');
  //
  //  // note that you can also chain configs
  //  //$ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
  //})
;
