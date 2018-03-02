console.log("Starting app.js...");

const yargs=require('yargs');

const notes=require('./notes.js');

const argv=yargs
	.command('add', 'Add a new note', {
		title:{
			describe:'Title of note',
			demand:true,
			alias:'t'

		},
		body:{
			describe:'Body of note',
			demand:true,
			alias:'b'
		}
	})
	.help()
	.argv;
var command = argv._[0];

console.log("Command: " + command);

if (command=="add") {
	if (notes.addNote(argv.title,argv.body)) {
		console.log('Saved new note: ${argv.title}');
	} else {
		console.log('Duplicate note. Not added.');
	}
} else if (command=="list") {
	var selectedNotes = notes.getAll(argv.title);
	if (selectedNotes) {
		console.log('selected note(s) were found: Body is ', selectedNotes.body);
	} else {
		console.log('selected note not present')
	}
} else if (command=="read") {
	notes.readNote(argv.title);
} else if (command=="remove") {
	if (notes.removeNote(argv.title)) {
		console.log('Removed note');
	} else {
		console.log('Note not present');
	}
} else {
	console.log("Command not recognized");
};
