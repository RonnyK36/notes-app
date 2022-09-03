const editBtn = document.querySelector('.edit')
const deleteBtn = document.querySelector('.delete')
const notesEl = document.querySelector('.notes')
const mainEl = notesEl.querySelector('.main')
const textAreaEl = notesEl.querySelector('textarea')
const newNoteBtn = document.getElementById('add-note')


editBtn.addEventListener('click', () => {
    mainEl.classList.toggle('hidden')
    textAreaEl.classList.toggle('hidden')
})

textAreaEl.addEventListener('input', (event) => {
    const { value } = event.target

    mainEl.innerHTML = marked(value)
})

newNoteBtn.addEventListener('click', () => {
    addNewNote()
})

function addNewNote() {

}