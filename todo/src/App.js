import './App.css';
import { useState } from 'react';
import LeftSideBar from './Component/LeftSideBar';
import Notes from './Component/Notes';
import Rightside from './Component/Rightside';

function App() {
  const [noteGroups, setNoteGroups] = useState(
    localStorage.getItem("noteGroups")
      ? JSON.parse(localStorage.getItem("noteGroups"))
      : []
  );

  const [display, setDisplay] = useState(false);

  return (
    <div style={{display:"flex"}} className="App">
        <LeftSideBar
          display={display}
          setDisplay={setDisplay}
          noteGroups={noteGroups}
        />
        <Rightside/>
        {/* <Notes/> */}
    </div>
  );
}

export default App;
