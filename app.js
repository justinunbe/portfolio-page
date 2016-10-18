angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
$stateProvider
.state('home', {
    url:"/",
    templateUrl: "home/home.html"
})
.state('singleproject', {
  url:"/singleproject",
  templateUrl: "Single-Project/single-project.html",
})
.state('allprojects', {
  url:'/allprojects',
  templateUrl: 'All-Projects/all-projects.html',
});
$urlRouterProvider
        .otherwise('/');

});//end of config
