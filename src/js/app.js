var app = angular.module('app', []);
app.controller('mainController', function($scope, $http){
    $http({
        method: 'GET',
        url: 'src/js/news.json'
     }).then(function (response){
        $scope.news = response.rss.channel;
        //Imprimo en consola el response
        console.log(response.rss.channel);
     },function (error){
        console.log('Error: ' + error);
     });
});