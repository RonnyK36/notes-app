const newNoteBtn = document.getElementById('add-note')

newNoteBtn.addEventListener('click', () => {
    addNewNote()
})

function addNewNote() {
    const note = document.createElement('div')
    note.classList.add('notes')
    note.innerHTML = `
    <div class="notes">
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main hidden"></div>
        <textarea></textarea>
    </div>
    `
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')

    const mainEl = note.querySelector('.main')
    const textAreaEl = note.querySelector('textarea')


    editBtn.addEventListener('click', () => {
        mainEl.classList.toggle('hidden')
        textAreaEl.classList.toggle('hidden')
    })

    deleteBtn.addEventListener('click', () => {
        note.remove()
    })

    textAreaEl.addEventListener('input', (event) => {
        const { value } = event.target

        mainEl.innerHTML = marked(value)
    })
    document.body.appendChild(note)
}