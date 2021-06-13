//inhertiance

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }
  get availability() {
    return this.getAvailability();
  }
  getAvailability = function () {
    if (this.numCopies === 0) {
      return "out of stock";
    } else if (this.numCopies <= 10) {
      return "low stock";
    } else {
      return "in stock";
    }
  };
  sell = function (numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  };
  restock = function (numCopiesStock = 5) {
    this.numCopies += numCopiesStock;
  };
}
class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }
  getEdition() {
    return `The current version of this book is ${this.edition}th edition.`;
  }
}
const view = new TechnicalBook("haidi", "hermoine", 123, 5, 5);
console.log(view.getEdition());
console.log(view.availability);
