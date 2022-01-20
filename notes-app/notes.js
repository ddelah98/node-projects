const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.black.bgGreen('New Note Added...'))
    }else{
        console.log(chalk.black.bgRed(' Note Title in use'))
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

const removeNote = function(title){
    console.log('removing title' + title)
    const notes = loadNotes();
    const findTitle = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length > findTitle.length){
        console.log(chalk.black.bgGreen('Note Removed !'))
        saveNotes(findTitle)
    }else{
    console.log(chalk.black.bgRed(' No Note Found !'))
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote
}