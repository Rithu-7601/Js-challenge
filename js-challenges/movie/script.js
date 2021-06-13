// Your goal is to create a TechnicalBook class that inherits from the Book class in the previous challenge.
//  This class will also take a title, author, ISBN, and number of copies, but will take a fifth argument, an edition.
//   The TechnicalBook class will also provide a getEdition function which returns the following string. The current version of this book is, followed by the book's edition.
// You should use a template literal for this phrase.

// solution:

// USING PROTOTYPE

// const Movie = function (title, director, genre, releaseyear, rating) {
//   this.title = title;
//   this.director = director;
//   this.genre = genre;
//   this.releaseyear = releaseyear;
//   this.rating = rating;
// };
// Movie.prototype.getOverview = function () {
//   return `${this.title} a ${this.genre} film directed by ${this.director} was released in ${this.releaseyear}. It recieved a rating of ${this.rating}.`;
// };
// const movieOne = new Movie("Haidi", "Ron", "Action", 2011, 4);
// console.log(movieOne);
// console.log(movieOne.getOverview());

// const movieTwo = new Movie("Shinchan", "Kim", "Comedy", 2001, 4.5);
// console.log(movieTwo.getOverview());

// USING CLASS
class Movie {
  constructor(title, director, genre, releaseyear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseyear = releaseyear;
    this.rating = rating;
  }
  getOverview() {
    return `${this.title} a ${this.genre} film directed by ${this.director} was released in ${this.releaseyear}. It recieved a rating of ${this.rating}.`;
  }
}

const movieOne = new Movie("Haidi", "Ron", "Action", 2011, 4);
console.log(movieOne);
console.log(movieOne.getOverview());

const movieTwo = new Movie("Shinchan", "Kim", "Comedy", 2001, 4.5);
console.log(movieTwo.getOverview());
