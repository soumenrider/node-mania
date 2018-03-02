console.log('Starting Notes...');

const fs = require('fs');

var fetchNotes=()=>{
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}
	catch(e) {
		return [];
	}
}

var saveNotes=(notes)=>{
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote=(title,body)=>{
	//console.log('Adding notes',title,body);
	var notes=fetchNotes();
	var note={
		title,
		body
	}

	var duplicateNotes = notes.filter(note=>note.title===title);
	if (duplicateNotes.length===0) {
		notes.push(note);
		saveNotes(notes);
		return true;
	}else{
		return false;
	}
};

var getAll=(title)=>{
	console.log('Getting all notes');
	var notes = fetchNotes();
	var selectedNotes = notes.filter(note=>note.title===title);
	return selectedNotes[0];
};

var readNote=(title)=>{
	console.log('Reading notes: ',title);
};

var removeNote=(title)=>{
	console.log('Removing notes: ',title);
	var notes=fetchNotes();
	var newNotes=notes.filter(note=>note.title!==title);
	saveNotes(newNotes);
	if (notes.length!==newNotes.length){
		return true;
	} else {
		return false;
	}
};

module.exports={
	addNote,
	getAll,
	readNote,
	removeNote
};
