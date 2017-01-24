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
            template: '<h3>books</h3>'
        })
            .state('createBooks', {
            url: '/addbook',
            template: '<h3>add book</h3>'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: false
        });
    });
})(Book || (Book = {}));
