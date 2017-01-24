namespace Book.Components{
  const name= 'bookCard';
  const template = '/client/app/components/bookCard/bookcard.html';

  export class BookCard {
    public book;
    constructor(
      private BookService: Book.Services.BookService
    
    ){
      // this.BookService.getBook(this.book)
      // .then((data)=>{
      //
      // })
      // .catch((e)=>{
      //   throw new Error(e);
      // })
    }

    submit() {
      this.BookService.updateBook(this.book)
        .then((data) => {
          //null

        }).catch((e) => {
          throw new Error(e);
        })
    }
  }
  angular.module('book').component(name, {
    templateUrl: template,
    controller: Book.Components.BookCard,
    controllerAs: 'vm',
    bindings: {
      book: '<'
    }
  });
}
