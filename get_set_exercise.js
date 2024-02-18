class Book {
    constructor(title, author, price) {
      this._title = '';
      this._author = '';
      this._price = 0;
  

      this.title = title;
      this.author = author;
      this.price = price;
    }
  
    get title() {
      return this._title;
    }
  
    set title(newTitle) {
      if (typeof newTitle === 'string' && newTitle.trim() !== '') {
        this._title = newTitle;
      } else {
        console.error('Invalid title. Please provide a non-empty string.');
      }
    }
  
    get author() {
      return this._author;
    }

    set author(newAuthor) {
      if (typeof newAuthor === 'string' && newAuthor.trim() !== '') {
        this._author = newAuthor;
      } else {
        console.error('Invalid author. Please provide a non-empty string.');
      }
    }
  

    get price() {
      return this._price;
    }
  
 
    set price(newPrice) {
      if (typeof newPrice === 'number' && newPrice > 0) {
        this._price = newPrice;
      } else {
        console.error('Invalid price. Please provide a positive number.');
      }
    }
  }
  

  const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 15.99);
  

  console.log('Title:', myBook.title);
  console.log('Author:', myBook.author);
  console.log('Price:', myBook.price);
  

  myBook.title = ''; 
  myBook.price = -5; 
  
  console.log('Title:', myBook.title);
  console.log('Price:', myBook.price);