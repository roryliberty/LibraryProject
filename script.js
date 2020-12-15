let myLibrary = [];
const bookshelfDiv = document.querySelector('#bookshelf');

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.info = function() {
		return ('\'' + this.title + '\', ' + this.author + ', ' + this.pages + ' pages, ' + readOrNot(this.read));
	}

function readOrNot(bool) {
	return (bool === true) ? 'Read' : 'Not Read';
}

const testBookOne = new Book('Book One', 'Rainne Liberty', 42, true);
console.log(testBookOne.info());
myLibrary.push(testBookOne);

const testBookTwo = new Book('Book Two', 'Rory Liberty', 345, false);
console.log(testBookTwo.info());
myLibrary.push(testBookTwo);

function addBookToLibrary() {

}


//Write a function that loops through the array and displays each book on the page.

