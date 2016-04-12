angular.module('app.services', [])

.factory('Bills', function() {

    //模拟已经从服务器获取到数据。正式需要使用$http服务与后台通讯获取数据
  var billItems = [{
    id: 0,
    title: '张0提交单据-审批通过 FYBXD0000000011',
    system: '费用报销单',
    date: '2016-01-01'
  },{
    id: 1,
    title: '张1提交单据-审批通过 FYBXD0000000011',
    system: '费用报销单',
    date: '2016-01-01'
  },{
    id: 2,
    title: '张2提交单据-审批通过 FYBXD0000000011',
    system: '费用报销单',
    date: '2016-01-01'
  },{
    id: 3,
    title: '张3提交单据-审批通过 FYBXD0000000011',
    system: '费用报销单',
    date: '2016-01-01'
  },{
    id: 4,
    title: '张4提交单据-审批通过 FYBXD0000000011',
    system: '费用报销单',
    date: '2016-01-01'
  },{
    id: 5,
    title: '张5提交单据-审批通过 FYBXD0000000011',
    system: '费用报销单',
    date: '2016-01-01'
  }
  ];

  return {
    all: function() {
      return billItems;
    },
    remove: function(id) {
      billItems.splice(billItems.indexOf(id), 1);
    },
    get: function(billItemsId) {
      for (var i = 0; i < billItems.length; i++) {
        if (billItems[i].id === parseInt(billItemsId)) {
          return billItems[i];
        }
      }
      return null;
    }
  };
})


.factory('$LoginService',function($http){
      return {
        findAll  : function(tableName,requestParams){
          var url =config.basePath+tableName+"/findAll.do?callback=JSON_CALLBACK";
          return $http.jsonp(url,{params:requestParams});

        },
        login : function(tableName,requestParams){
          var url =config.basePath+tableName+"/login.do?phoneNumber="+requestParams.phoneNumber+"&password="+requestParams.password+"&callback=JSON_CALLBACK";
          return $http.jsonp(url);
        },

      }
})

;
