//Intanciamos nuestra aplicacion
var app = angular.module('app', []);
//Creamos nuestro controlador main y lo agregamos con ng-controller
app.controller('mainController', function($scope, $http){
    $http({
        method: 'GET',
        url: 'src/js/news.json'
     }).then(function (response){
        //Agregamos nuestro json a nuestro scope.new de nuestra vista y lo recorremos con ng-repeat
        $scope.news = response.data.rss.channel.item;
        //Imprimo en consola el response
        console.log(response.data.rss.channel.item);
     },function (error){
         //Imprimos el error
        console.log('Error: ' + error);
     });
});