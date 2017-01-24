namespace  Book{
  angular.module('book', ['ngResource', 'ui.router','ngStorage'])
    .config((
      $resourceProvider: ng.resource.IResourceServiceProvider,
      $stateProvider: ng.ui.IStateProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider,
      $locationProvider: ng.ILocationProvider
    ) => {
      $stateProvider
        .state('home', {
          url: '/',
          template: '<book-list></book-list>'
        })
        .state('books',{
          url: '/books/:id',
          template:'<h3>books</h3>'
        })
        .state('createBooks',{
          url: '/addbook',
          template:'<h3>add book</h3>'
        })
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false,
          rewriteLinks: false
        });
      })

}
