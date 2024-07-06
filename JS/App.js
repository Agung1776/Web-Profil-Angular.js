var Project1= angular.module('Project', ['ngRoute']);

Project1.config(['$routeProvider', function($routeProvider){
    $routeProvider    
        .when('/beranda', {
            templateUrl: 'View/home.html',
            controller: 'ProjectController'
        })
        .when('/project',{
            templateUrl: 'View/project.html',
            controller: 'ProjectController'
        })
        .otherwise({
            redirectTo: '/beranda'
        })
}]);

Project1.directive('randomProject', ['$interval', function ($interval) {
    return {
        restrict: 'E',
        scope: {
            project: '=',
            title: '@'
        },
        templateUrl: 'View/random.html', 
        controller: function ($scope) {
            $scope.random = Math.floor(Math.random() * 5);

            // Update the random value every second (1000 milliseconds)
            $interval(function () {
                $scope.random = Math.floor(Math.random() * 5);
            }, 5000);
        }
    };
}]);

function repeat($scope){
    $scope.random = Math.floor(Math.random() * 5);
};

Project1.controller('ProjectController', ['$scope', '$http', function($scope, $http){

    $http.get('Data/project.json').then(function(response) {
        $scope.projects = response.data;
      });

    // $scope.projects = [
    //     {
    //         judul: "Express Cleaning",
    //         tgl: "2022/11/08",
    //         gambar:"Foto/ExpressCleaning.png"
    //     },
    //     {
    //         judul: "Lakamasu",
    //         tgl: "2022/11/11",
    //         gambar:"Foto/Lakamasu.png"
    //     },
    //     {
    //         judul: "Exam Web",
    //         tgl: "2023/05/22",
    //         gambar: "Foto/ExamWeb.png"
    //     },
    //     {
    //         judul: "Web Inventaris",
    //         tgl: "2023/12/05",
    //         gambar: "Foto/WebInventaris.png"
    //     },
    //     {
    //         judul: "Web Divtik",
    //         tgl: "2024/01/29",
    //         gambar: "Foto/WebDivtik.png"
    //     }
    // ];
    // console.log(angular.toJson($scope.projects));
}]);