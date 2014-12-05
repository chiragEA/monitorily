(function() {
    
    var AllOrdersController = function ($scope, customersFactory) {
        $scope.orders = null;
        $scope.ordersTotal = 0.0;
        $scope.totalType;
                  $scope.go = function() {
                        var imgArr= ["styles/images/bill1.jpg","styles/images/bill2.jpg","styles/images/bill3.jpg"];

            downloadAllImages(imgArr);
}
        function downloadAllImages(imgLinks){
 var zip = new JSZip();
 var deferreds = [];
 for(var i=0; i<imgLinks.length; i++)
 {
  deferreds.push( addToZip(zip, imgLinks[i], i) );
 }
 $.when.apply(window, deferreds).done(generateZip);
}
function generateZip(zip)
{
 var content = zip.generate({type:"blob"});
 // see FileSaver.js
 saveAs(content, "MonitorilyPhotos.zip");
}
function addToZip(zip, imgLink, i) {
  var deferred = $.Deferred();
  JSZipUtils.getBinaryContent(imgLink, function (err, data) {
    if(err) {
      alert("Problem happened when download img: " + imgLink);
      console.erro("Problem happened when download img: " + imgLink);
      deferred.resolve(zip); // ignore this error: just logging
      // deferred.reject(zip); // or we may fail the download
    } else {
      zip.file("picture"+i+".jpg", data, {binary:true});
      deferred.resolve(zip);
    }
 });
return deferred;
}
          $scope.goz = function() {
                        var imgArr= ["styles/images/bill1.jpg","styles/images/bill2.jpg","styles/images/bill3.jpg"];

            downloadAllImages(imgLinks);
            /*
            var imgArr= ["styles/images/bill1.jpg","styles/images/bill2.jpg","styles/images/bill3.jpg"];
    console.log("zipping");
    console.log(imgArr[2]);
    JSZipUtils.getBinaryContent(imgArr, function (err, dataArray) {
   if(err) {
      throw err; // or handle the error
   }
   var zip = new JSZip();
   zip.file("billboard1.png", dataArray[0], {binary:true});
   zip.file("billboard2.png", dataArray[1], {binary:true});
   zip.file("billboard3.png", dataArray[2], {binary:true});
    content = zip.generate();
    location.href="data:application/zip;base64," + content;

});

    /*
    var zip = new JSZip();
    console.log(window.imgData);
    zip.file("styles/images/bill1.jpg",window.imgData, {base64: true});
    zip.file("styles/images/bill2.jpg",window.imgData, {base64: true});
    zip.file("styles/images/bill3.jpg",window.imgData, {base64: true});

    content = zip.generate();
    location.href="data:application/zip;base64," + content;
    */
        }

        function init() {
             customersFactory.getOrders()
                .success(function(orders) {
                    $scope.orders = orders;
                    getOrdersTotal();
                })
                .error(function(data, status, headers, config) {
                    //handle error
                });
        }        
        
        function getOrdersTotal() {
            var total = 0;
            for (var i=0,len=$scope.orders.length;i<len;i++) {
                total += $scope.orders[i].total;
            }
            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
        }

        init();
    };
    
    AllOrdersController.$inject = ['$scope', 'customersFactory'];

    angular.module('customersApp')
      .controller('AllOrdersController', AllOrdersController);
    
}());