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
          template:'<book-detail></book-detail>'
        })
        .state('createBooks',{
          url: '/addbook',
          template:'<create-book></create-book>'
        })
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false,
          rewriteLinks: false
        });
      })

}
