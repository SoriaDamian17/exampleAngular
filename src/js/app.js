var app = angular.module('app', []);
app.controller('mainController', function($scope, $http){
    var news = null;//Creamos variable para nuestras noticias
    $http({
        method: 'GET',
        url: 'src/js/news.json'
     }).then(function (response){
        $scope.news = response;
        //Imprimo en consola el response
        console.log(response);
     },function (error){
        console.log('Error: ' + error);
     });
});