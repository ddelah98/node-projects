const fs = requre('fs');

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function(title, body){
    const notes = loadNotes()
    console.log('Printing Notes...')
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
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