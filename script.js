// Tired of adding books every time, so just put some in by default
let myLibrary = [
	new Book('Title 1', 'Chris', 123, true),
	new Book('Title 2', 'Chris', 123, true),
	new Book('Title 3', 'Chris', 123, true),
	new Book('Title 4', 'Chris', 123, true),
];

// Variable for the state of the modal
let modalState = false;

// Fuck typing document.querySelector all the time
// This is way faster
const q = ele => document.querySelector(ele)

const bookshelfDiv = q('#bookshelf');
const modal = q('#modal');
const form = q('form')

// Constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages + ' pages';
	this.read = read;
}

Book.prototype.readStatus = function () {
	this.read = !this.read;
}

// Display the default books
myLibrary.forEach(showBooks)

// Get info from modal form and add to myLibrary
function bookEntry(evt) {
	// Because 'form' is used, this keeps the form from doing form things and reloading the page,
	// because forms are stupid. Don't use forms.
	evt.preventDefault();

	// Close modal after submitting new book
	toggleModal();

	// Object destructuring! So fun.
	const {
		title,
		author,
		pages,
		read
	} = form

	// Check for any falsy values
	if (!title.value || !author.value || !pages.value) {
		return alert("Please fill out all information before clicking on Submit!")
	}

	// Use constructor properly to create a new book
	const newBook = new Book(title.value, author.value, pages.value, read.value);

	// Add it to array
	myLibrary.push(newBook);

	// Reset form
	form.reset();

	// Add the book: please note, I removed the code to erase all the books and rebuild
	// Instead, just add the new book
	showBooks(newBook)
}

// Should be obvious what this function does...
function toggleModal() {
	modal.style.display = modalState ? 'none' : 'block';
	modalState = !modalState;
}

// Display the books on the page
function showBooks(item) {

	// More custom functions to reduce code
	const create = ele => document.createElement(ele);

	let protoDiv = create('div');
	protoDiv.classList.add('cardDiv');
	bookshelfDiv.appendChild(protoDiv);

	let protoTitle = create('h1');
	protoTitle.classList.add('card-title');
	protoTitle.textContent = item.title;
	protoDiv.appendChild(protoTitle);

	let protoAuthor = create('p');
	protoAuthor.classList.add('cardP');
	protoAuthor.textContent = item.author;
	protoDiv.appendChild(protoAuthor);

	let protoPages = create('p');
	protoPages.classList.add('cardP');
	protoPages.textContent = item.pages;
	protoDiv.appendChild(protoPages);

	let protoRead = create('button');
	protoRead.classList.add('status-btn');
	protoRead.textContent = readOrNot(item.read);
	protoDiv.appendChild(protoRead);
	protoRead.addEventListener('click', () => {
		item.readStatus();
		protoRead.textContent = readOrNot(item.read);
	});

	let protoButton = create('button');
	protoButton.classList.add('remove-btn');
	protoButton.textContent = 'Remove Book';
	protoDiv.appendChild(protoButton);

	protoButton.addEventListener('click', (evt) => {
		myLibrary.splice(myLibrary.indexOf(item), 1);
		// Instead of removing all items and rebuilding, just find the one item and remove it
		// Easy peasy
		const card = evt.target.parentElement;
		card.parentElement.removeChild(card);
	});
}

function readOrNot(bool) {
	return bool ? 'Read' : 'Not Read';
}
