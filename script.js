// script.js
const noteList = document.getElementById('note-list');
const noteForm = document.getElementById('note-form');
const saveNoteButton = document.getElementById('save-note');
const deleteNoteButton = document.getElementById('delete-note');
const searchInput = document.getElementById('search-input');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');
const pageNumberSpan = document.getElementById('page-number');

let notes = [];
let currentPage = 1;
const notesPerPage = 10;
let searchQuery = '';

// Load notes from local storage
if (localStorage.getItem('notes')) {
    notes = JSON.parse(localStorage.getItem('notes'));
    renderNoteList();
}

// Event listeners
noteForm.addEventListener('submit', createNote);
saveNoteButton.addEventListener('click', updateNote);
deleteNoteButton.addEventListener('click', deleteNote);
searchInput.addEventListener('input', searchNotes);
prevPageButton.addEventListener('click', prevPage);
nextPageButton.addEventListener('click', nextPage);

// Functions
function createNote(event) {
    event.preventDefault();
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;
    const note = { title,