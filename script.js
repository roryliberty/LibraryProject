let myLibrary = [];
const bookshelfDiv = document.querySelector('#bookshelf');
const submitButton = document.querySelector('#submit-btn');
const removeButtons = document.querySelectorAll('.remove-btn');
const modal = document.querySelector('#modal');
const btn = document.querySelector('#add-btn');
const span = document.querySelectorAll('.close')[0];

// Constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}

// get info from book entry form and add to myLibrary
function bookEntry() {
	modal.style.display = 'none';

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
	showBooks();
}

// show the books on the page
function showBooks() {
	for (let i = (myLibrary.length - 1); i < myLibrary.length; i++) {

		let protoDiv = document.createElement('div');
		protoDiv.classList = 'cardDiv';
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

		let protoButton = document.createElement('button');
		protoButton.classList = 'remove-btn';
		protoButton.textContent = 'Remove Book';
		protoDiv.appendChild(protoButton);

//		protoButton.addEventListener('click', () => {
//			myLibrary.splice(myLibrary)
//		});
	}
}



function readOrNot(bool) {
	return (bool === true) ? 'Read' : 'Not Read';
}



function removeBook() {
	
}



submitButton.addEventListener('click', bookEntry);



for (const removeButton of removeButtons) {
	removeButton.addEventListener('click', function(e) {
		console.log(e.target);
	});
}