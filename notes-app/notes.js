const fs = require('fs');

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        console.log('New Note Added...')
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    }else{
        console.log('Note Title in use');
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

    } catch(error) {
        console.log(error);
        return []
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote
}