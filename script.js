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
//console.log(testBookOne.info());
myLibrary.push(testBookOne);


const testBookTwo = new Book('Book Two', 'Rory Liberty', 345, false);
//console.log(testBookTwo.info());
myLibrary.push(testBookTwo);

function addBookToLibrary() {
	// loop through array
	for (let i = 0; i < myLibrary.length; i++) {
		console.log(myLibrary[i]);

		let protoDiv = document.createElement('div');
		protoDiv.classList = 'cardDiv';
		protoDiv.style.borderStyle = 'solid';
		protoDiv.style.backgroundColor = 'orange';
		bookshelfDiv.appendChild(protoDiv);

		let protoTitle = document.createElement('h1');
		protoTitle.classList = 'cardTitle';
		protoTitle.textContent = myLibrary[i].title;
		protoDiv.appendChild(protoTitle);

		let protoAuthor = document.createElement('p');
		protoAuthor.classList = 'cardP';
		protoAuthor.textContent = myLibrary[i].author;
		protoDiv.appendChild(protoAuthor);

		let protoPages = document.createElement('p');
		protoPages.classList = 'cardP';
		protoPages.textContent = myLibrary[i].pages + ' pages';
		protoDiv.appendChild(protoPages);

		let protoRead = document.createElement('p');
		protoRead.classList = 'cardP';
		protoRead.textContent = readOrNot(myLibrary[i].read);
		protoDiv.appendChild(protoRead);
	}
}

addBookToLibrary();