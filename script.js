let myLibrary = [];
const bookshelfDiv = document.querySelector('#bookshelf');
const submitButton = document.querySelector('#submit-btn');


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

function addBookToLibrary() {
	// loop through array
	console.log(myLibrary.length);
	for (let i = 0; i < myLibrary.length; i++) {
//		console.log(myLibrary[i]);

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

// get info from book entry form and add to myLibrary
function bookEntry() {
	let addTitle = document.querySelector('#input-title').value;
	let addAuthor = document.querySelector('#input-author').value;
	let addPages = document.querySelector('#input-pages').value;
	let addRead = null;

	if (document.querySelector('#input-read').checked == true) {
		addRead = true;
	} else {
		addRead = false;
	}

	const newBook = new Book(addTitle, addAuthor, addPages, addRead);
	myLibrary.push(newBook);
	console.log(myLibrary);
	addBookToLibrary();
}

// When Submit button is clicked
submitButton.addEventListener('click', () => {
		bookEntry();
		modal.style.display = 'none';
	});

// Get the modal
var modal = document.querySelector('#modal');
var btn = document.querySelector('#add-btn');
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}