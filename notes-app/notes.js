const fs = require('fs');
const chalk = require('chalk');

const addNote =(title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note)=> note.title === title)
    const duplicateNoteSingular = notes.find((note) => note.title === title)

    if(!duplicateNoteSingular){
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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () =>{
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

    } catch(error) {
        console.log(error);
        return []
    }
}

const removeNote = (title) => {
    console.log('removing title' + title)
    const notes = loadNotes();
    const findTitle = notes.filter((note) => note.title !== title)

    if(notes.length > findTitle.length){
        console.log(chalk.black.bgGreen('Note Removed !'))
        saveNotes(findTitle)
    }else{
    console.log(chalk.black.bgRed(' No Note Found !'))
    }
}

const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes'))
    notes.forEach(element => {console.log('These are your notes '+  chalk.black.bgGreen(element.title))
    })
}

const readNotes = (title) =>{
    const notes = loadNotes();
    const findNote = notes.find((note) => note.title === title)
    
    if(findNote){
        console.log(chalk.inverse(findNote.title));
        console.log(findNote.body)
    }else{
        console.log(chalk.red.inverse('No Note Found'))
    }
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes : readNotes
}