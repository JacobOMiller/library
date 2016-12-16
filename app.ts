namespace MediaClasses{
  export abstract class Media{
    constructor(public type: string, public name: string, public date: string){
      type = this.type;
      name = this.name;
      date = this.date;
    }
  }
  export abstract class Book extends Media{
    constructor(type: string,name: string,date: string, public author: string){
      super(type,name,date);
      author = this.author;
    }
  }

  export class comicBook extends Book{
    constructor(type: string,name: string,date: string, author: string,
    public illustrator: string, public issue: number){
      super(type,name,date,author);
      illustrator = this.illustrator;
      issue = this.issue;
    }
  }

  export class referenceBook extends Book{
    constructor(type: string,name: string,date: string, author: string,
    public edition: number, public isbn: string){
      super(type,name,date,author);
      edition = this.edition;
      isbn = this.isbn;
    }
  }
}
