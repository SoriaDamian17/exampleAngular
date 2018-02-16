var app = angular.module('app', []);
app.controller('mainController', function($scope, $http){
    var news = null;//Creamos variable para nuestras noticias
    $http.get('src/js/news.json')
    .success(function(response) {
        news = response;
        //$scope.news = response;
        //Imprimo en consola el response
        console.log(response);
    })
    .error(function(err) {
        console.log('Error: ' + err);
    });
});