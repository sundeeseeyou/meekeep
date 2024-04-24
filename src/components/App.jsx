import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(inputText) {
    setNotes((prevStat) => {
      return [...prevStat, inputText];
    });
  }

  function deleteItem(id) {
    setNotes((prevStat) => {
      return prevStat.filter((list, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((todo, index) => (
        <Note
          key={index}
          id={index}
          title={todo.title}
          content={todo.content}
          onValidate={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
