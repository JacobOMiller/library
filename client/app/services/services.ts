namespace Book.Services{
  export class BookService{
    public BookResource;

    getBooks(){

      return this.BookResource.query().$promise;

    }
    getBook(id){
      return this.BookResource.get({id:id}).$promise
    }
    updateBook(book){
      return this.BookResource.update({id: book._id}, book).$promise;
    }
    createBook(book){
      return this.BookResource.save(book).$promise
    }
    deleteBook(book){
      return this.BookResource.remove({id: book._id}).$promise
    }
    createBookshelf(){}
    updateBookshelf(){}
    deleteBookshelf(){}

    constructor(
      $resource: ng.resource.IResourceService){
      this.BookResource = $resource('/api/books/:id',{id: '@id'}, {update: { method: 'put' }});
    }
  }
  angular.module('book').service('BookService', BookService);
}
