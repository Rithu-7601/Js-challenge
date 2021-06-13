// You need to create a book class, which provides information about different books in the store. Each book will have a title, author, ISBN, and keep track of the number of available copies.
// You'll need a way to get each book's availability.
// If there aren't any copies of the book left, the function should return out of stock.
// If there are less than 10 copies, the function should return low stock.
// Otherwise the function should return in stock.
// You'll also need a function for selling a book.
// This will take the number of copies sold and subtract it from the total number of copies.
// If no argument is passed, we can default the number of copies to sell to one.
//  Lastly, you'll want a restock function, which takes in a number of copies to restock and adds it to the total number of copies. If no argument is passed, we can default the restock number to five.
//  You should use JavaScript's class keyword as well as a getter function for the availability method.

// solution:
// USING PROTOTYPE

// const Book = function (title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// };
// Book.prototype.getAvailability = function () {
//   if (this.numCopies === 0) {
//     return "out of stock";
//   } else if (this.numCopies <= 10) {
//     return "low stock";
//   } else {
//     return "in stock";
//   }
// };
// Book.prototype.sell = function (numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// };
// Book.prototype.restock = function (numCopiesStock = 5) {
//   this.numCopies += numCopiesStock;
// };
// const HarryPotterBook = new Book("harry potter", "james", 12345, 5);
// console.log(HarryPotterBook.getAvailability());
// HarryPotterBook.restock(12);
// console.log(HarryPotterBook.getAvailability());
// HarryPotterBook.sell(15);
// console.log(HarryPotterBook.getAvailability());

// USING CLASS
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

const HarryPotterBook = new Book("harry potter", "james", 12345, 5);
console.log(HarryPotterBook.getAvailability());
HarryPotterBook.restock(12);
console.log(HarryPotterBook.getAvailability());
HarryPotterBook.sell(15);
console.log(HarryPotterBook.getAvailability());
