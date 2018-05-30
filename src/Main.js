import React from 'react';

import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import base from './base';

class Main extends React.Component {

  constructor () {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: []
    }
  }

  componentWillMount() {
    base.syncState(`notes/${this.props.uid}`, {
      context: this,
      state: 'notes',
      asArray: true
    });
  }

  blankNote = () => {
    return {
      id: 0,
      title: "",
      body: "" 
    }
  }

  setCurrentNote = (note) => {
    this.setState({currentNote: note});
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote());
  }

  saveNote = (note) => {
    const notes = [...this.state.notes];
    if (note.id) {
      const i = notes.findIndex(currentNote => currentNote.id === note.id);
      notes[i] = note;
    } else {
      note.id = Date.now();
      notes.push(note);
    }
    this.setState({ notes });
    this.setCurrentNote(note);
  }

  removeNote = (note) => {
    const notes = [...this.state.notes];
    if (note.id) {
      const i = notes.findIndex(currentNote => currentNote.id === note.id);
      notes.splice(i, 1);
      this.setState({ notes });
      this.setCurrentNote(this.blankNote());
    }
  }

  render () {
    return (
      <div 
        className="Main" 
        style={style} 
      >
        <Sidebar 
          resetCurrentNote={this.resetCurrentNote} 
          signOut={this.props.signOut} 
        />
        <NoteList 
          notes={this.state.notes} 
          setCurrentNote={this.setCurrentNote} 
        />
        <NoteForm 
          currentNote={this.state.currentNote} 
          saveNote={this.saveNote} 
          removeNote={this.removeNote} 
        />
      </div>
    );
  }
};

const style = {
  display: "flex",
  height: "100vh",
  alignItems: "stretch" 
}

export default Main;
