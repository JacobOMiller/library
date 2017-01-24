var Book;
(function (Book) {
    angular.module('book', ['ngResource', 'ui.router', 'ngStorage'])
        .config(function ($resourceProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            template: '<book-list></book-list>'
        })
            .state('books', {
            url: '/books/:id',
            template: '<book-detail></book-detail>'
        })
            .state('createBooks', {
            url: '/addbook',
            template: '<create-book></create-book>'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: false
        });
    });
})(Book || (Book = {}));
