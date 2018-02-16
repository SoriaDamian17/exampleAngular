var app = angular.module('app', []);
app.controller('mainController', function($scope, $http){
    $http({
        method: 'GET',
        url: 'src/js/news.json'
     }).then(function (response){
        $scope.news = response.data.rss.channel.item;
        //Imprimo en consola el response
        console.log(response.data.rss.channel.item);
     },function (error){
        console.log('Error: ' + error);
     });
});