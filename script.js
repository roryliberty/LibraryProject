let myLibrary = [];
const bookshelfDiv = document.querySelector('#bookshelf');
const submitButton = document.querySelector('#submit-btn').addEventListener('click', bookEntry);
const removeButtons = document.querySelectorAll('.remove-btn');
const modal = document.querySelector('#modal');
const addButton = document.querySelector('#add-btn').addEventListener('click', () => modal.style.display = 'block');
const span = document.querySelectorAll('.close')[0].addEventListener('click', () => modal.style.display = 'none');

// Constructor
function Book(title, author, pages, read) {
	this.title = form.title.value;
	this.author = form.author.value;
	this.pages = form.pages.value + ' pages';
	this.read = form.read.checked;
}

// Get info from modal form and add to myLibrary
function bookEntry() {
	event.preventDefault();

	if (form.title.value === '' || form.author.value === '' || form.pages.value === '') {
		alert("Please fill out all information before clicking on Submit!")
	} else {
		modal.style.display = 'none';

		const newBook = new Book(title, author, pages, read);
		myLibrary.push(newBook);
		form.reset();
		resetBooks();
	}
}

// Works with the Remove Book button
function resetBooks() {
	const display = document.querySelector('#bookshelf');
	const cards = document.querySelectorAll('.cardDiv');
	
	for (let i = 0; i < cards.length; i++) {
		display.removeChild(cards[i]);
	}

	for (let j = 0; j < myLibrary.length; j++) {
		showBooks(myLibrary[j]);
	}
}

// Display the books on the page
function showBooks(item) {
	let protoDiv = document.createElement('div');
	protoDiv.classList = 'cardDiv';
	protoDiv.setAttribute('id', myLibrary.indexOf(item));
	bookshelfDiv.appendChild(protoDiv);

	let protoTitle = document.createElement('h1');
	protoTitle.classList.add = 'cardTitle';
	protoTitle.textContent = item.title;
	protoDiv.appendChild(protoTitle);

	let protoAuthor = document.createElement('p');
	protoAuthor.classList = 'cardP';
	protoAuthor.textContent = item.author;
	protoDiv.appendChild(protoAuthor);

	let protoPages = document.createElement('p');
	protoPages.classList = 'cardP';
	protoPages.textContent = item.pages;
	protoDiv.appendChild(protoPages);

	let protoRead = document.createElement('p');
	protoRead.classList = 'cardP';
	protoRead.textContent = readOrNot(item.read);
	protoDiv.appendChild(protoRead);

	let protoButton = document.createElement('button');
	protoButton.classList = 'remove-btn';
	protoButton.textContent = 'Remove Book';
	protoDiv.appendChild(protoButton);

	protoButton.addEventListener('click', () => {
		myLibrary.splice(myLibrary.indexOf(item), 1);
		resetBooks();
	});
}

function readOrNot(bool) {
	return (bool === true) ? 'Read' : 'Not Read';
}