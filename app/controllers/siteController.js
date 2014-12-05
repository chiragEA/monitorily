(function() {
    
    var siteController = function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;
        $scope.products =[{"id":"12518","name":"Green Park","height":"12.000","width":"20.000","price":"0","address":"Green Park","lat":"28.557621","lng":"77.204587","lightingid":"2","sizeunitid":"0","basecurrency":"INR","mediatype":"Billboard","companyname":"Gurjot Eatads","accepted":"1","lighting":"Front lit","sizeunit":"Ft"},{"id":"12520","name":"Aims","height":"3.000","width":"12.000","price":"0","address":"Aims","lat":"28.566646","lng":"77.209078","lightingid":"2","sizeunitid":"0","basecurrency":"INR","mediatype":"Billboard","companyname":"Gurjot Eatads","accepted":"1","lighting":"Front lit","sizeunit":"Ft"},{"id":"12523","name":"Green Park","height":"12.000","width":"20.000","price":"0","address":"Green Park","lat":"28.557621","lng":"77.204587","lightingid":"2","sizeunitid":"0","basecurrency":"INR","mediatype":"Billboard","companyname":"Gurjot Eatads","accepted":"1","lighting":"Front lit","sizeunit":"Ft"},{"id":"12524","name":"Green Park","height":"12.000","width":"20.000","price":"0","address":"Green Park","lat":"28.557621","lng":"77.204587","lightingid":"2","sizeunitid":"0","basecurrency":"INR","mediatype":"Billboard","companyname":"Gurjot Eatads","accepted":"1","lighting":"Front lit","sizeunit":"Ft"},{"id":"12525","name":"Aims","height":"3.000","width":"12.000","price":"0","address":"Aims","lat":"28.566646","lng":"77.209078","lightingid":"2","sizeunitid":"0","basecurrency":"INR","mediatype":"Billboard","companyname":"Gurjot Eatads","accepted":"1","lighting":"Front lit","sizeunit":"Ft"},{"id":"12526","name":"Green Park","height":"12.000","width":"20.000","price":"0","address":"Green Park","lat":"28.557621","lng":"77.204587","lightingid":"2","sizeunitid":"0","basecurrency":"INR","mediatype":"Billboard","companyname":"Gurjot Eatads","accepted":"1","lighting":"Front lit","sizeunit":"Ft"},{"id":"12527","name":"Aims","height":"3.000","width":"12.000","price":"0","address":"Aims","lat":"28.566646","lng":"77.209078","lightingid":"2","sizeunitid":"0","basecurrency":"INR","mediatype":"Billboard","companyname":"Gurjot Eatads","accepted":"1","lighting":"Front lit","sizeunit":"Ft"},{"id":"12528","name":"Safdarjung","height":"10.000","width":"10.000","price":"0","address":"Safdarjung","lat":"28.582370","lng":"77.186220","lightingid":"3","sizeunitid":"0","basecurrency":"INR","mediatype":"Billboard","companyname":"Gurjot Eatads","accepted":"1","lighting":"Back lit","sizeunit":"Ft"},{"id":"12532","name":"Jor Bagh","height":"20.000","width":"10.000","price":"0","address":"Jor Bagh","lat":"28.587398","lng":"77.216085","lightingid":"3","sizeunitid":"0","basecurrency":"INR","mediatype":"Billboard","companyname":"Gurjot Eatads","accepted":"1","lighting":"Back lit","sizeunit":"Ft"},{"id":"12534","name":"Pitampura","height":"20.000","width":"20.000","price":"0","address":"Pitampura","lat":"28.702208","lng":"77.142764","lightingid":"2","sizeunitid":"0","basecurrency":"INR","mediatype":"Billboard","companyname":"Gurjot Eatads","accepted":"1","lighting":"Front lit","sizeunit":"Ft"},{"id":"12535","name":"Rajouri Garden","height":"10.000","width":"10.000","price":"0","address":"Rajouri Garden","lat":"28.641529","lng":"77.120915","lightingid":"3","sizeunitid":"0","basecurrency":"INR","mediatype":"Billboard","companyname":"Gurjot Eatads","accepted":"1","lighting":"Back lit","sizeunit":"Ft"},{"id":"12536","name":"South Ex I","height":"90.000","width":"50.000","price":"0","address":"Rajouri Garden","lat":"28.641529","lng":"77.120915","lightingid":"1","sizeunitid":"0","basecurrency":"INR","mediatype":"Bus Ad","companyname":"Gurjot Eatads","accepted":"1","lighting":"No lighting","sizeunit":"Ft"},{"id":"12537","name":"Rajiv Chowk Metro","height":"30.000","width":"40.000","price":"0","address":"Rajiv Chowk","lat":"28.632903","lng":"77.219678","lightingid":"3","sizeunitid":"0","basecurrency":"INR","mediatype":"Bin Ad","companyname":"Gurjot Eatads","accepted":"1","lighting":"Back lit","sizeunit":"Ft"},{"id":"12540","name":"Rohini Site","height":"20.000","width":"20.000","price":"0","address":"Rohini","lat":"28.749472","lng":"77.056533","lightingid":"2","sizeunitid":"0","basecurrency":"INR","mediatype":"Bus Shelter","companyname":"Gurjot Eatads","accepted":"1","lighting":"Front lit","sizeunit":"Ft"},{"id":"12549","name":"Andheri WEH","height":"30.000","width":"40.000","price":"0","address":"Andheri East","lat":"19.115491","lng":"72.872695","lightingid":"2","sizeunitid":"0","basecurrency":"INR","mediatype":"Billboard","companyname":"Gurjot Eatads","accepted":"1","lighting":"Front lit","sizeunit":"Ft"},{"id":"12550","name":"Near Orlem Church","height":"5.000","width":"20.000","price":"0","address":"Malad West","lat":"19.182755","lng":"72.840154","lightingid":"3","sizeunitid":"0","basecurrency":"INR","mediatype":"Bus Shelter","companyname":"Gurjot Eatads","accepted":"1","lighting":"Back lit","sizeunit":"Ft"}];
        function init() {
             customersFactory.getCustomer(customerId)
                .success(function(customer) {
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config) {
                    //handle error
                });
        }        

        init();
    };
    
    siteController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp')
      .controller('siteController', siteController);
    
}());