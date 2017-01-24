namespace Book.Components{

  const name = 'bookDetail';
  const template = '/client/app/components/bookDetails/bookdetails.html';


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
  angular.module('book').component(name,{
    templateUrl: template,
    controller: Book.Components.BookDetail,
    controllerAs: 'vm'
  });
}
