const newNoteBtn = document.getElementById('add-note')

const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach(note => {
        addNewNote(note)
    });
}


newNoteBtn.addEventListener('click', () => {
    addNewNote()
})

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('notes')
    note.innerHTML = `
    <div class="notes">
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>
    </div>
    `
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')

    const mainEl = note.querySelector('.main')
    const textAreaEl = note.querySelector('textarea')

    textAreaEl.value = text
    mainEl.innerHTML = marked(text)

    editBtn.addEventListener('click', () => {
        mainEl.classList.toggle('hidden')
        textAreaEl.classList.toggle('hidden')
    })

    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLocalStorage()
    })

    textAreaEl.addEventListener('input', (event) => {
        const { value } = event.target

        mainEl.innerHTML = marked(value)

        updateLocalStorage()
    })
    document.body.appendChild(note)
}


function updateLocalStorage() {
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => {
        notes.push(note.value)
    });

    localStorage.setItem('notes', JSON.stringify(notes))
}

// background: rgb(236, 215, 215);
// ## New Test Note
// This is a dummy note