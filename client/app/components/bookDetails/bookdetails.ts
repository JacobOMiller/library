namespace IMDbClone.Components{

  const name = 'movieDetail';
  const template = './ngApp/components/movieDetails/movieDetail.html';


  export class BookDetail{
      public book;
    constructor(
      BookService: Book.Services.BookService,
      $stateParams: ng.ui.IStateParamsService
    ){
      BookService.getBook($stateParams['id']).then((result)=>{
      this.book = result;
      }).catch((e)=>{
        throw new Error(e);
      })
    }
  }
  angular.module('imdb-clone').component(name,{
    templateUrl: template,
    controller: IMDbClone.Components.BookDetail,
    controllerAs: 'vm'
  });
}
