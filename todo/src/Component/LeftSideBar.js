import React, { useEffect, useState } from "react";
import "./LeftSide.css";
import ModalPopup from "./Modal/ModalPopup";
import NotesHeading from "./NotesHeading";

const LeftSideBar = ({selected,setSelected}) => {
  const [showmodal, setShowModal] = useState(false);
  const [titles, setTitles] = useState([]);
  const [groupNamesParent, setGroupNamesParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
		const data = localStorage.getItem("groupNames");
		if (data) {
			setGroupNamesParent(JSON.parse(data));
		} else {
			setGroupNamesParent([]);
		}
	}, []);

  useEffect(() => {
		if (groupNamesParent.length > 0) {
			const obj = JSON.parse(localStorage.getItem("groupNames"));
			const result = Object.keys(obj).map((key) => [obj[key]]);
			setTitles(result);
		}
	}, [groupNamesParent]);


  function handleClick() {
    console.log("clicked");
    setShowModal(true);
    console.log(showmodal);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <div className="left-section">
      <h3 className="desk_sidebar_heading">Pocket Notes</h3>
      <div className="desk_sidebar_btn">
        <button onClick={handleClick}>
          <span id="add">+</span>
          <span>Create Notes Group</span>
        </button>
      </div>
      <div className="desk_sidebar_notes_heading">
				{titles.length > 0 ? (
					titles.map((title, index) => (
						<NotesHeading
							selected={selected}
							setSelected={setSelected}
							key={index}
							title={title}
						/>
					))
				) : (
					<div className="desk_sidebar_notes_title_empty"></div>
				)}
			</div>
      {showmodal && (
        <div className="desk_prompt_overlay">
          <ModalPopup
            groupNamesParent={groupNamesParent}
            setGroupNamesParent={setGroupNamesParent}
            onClose={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export default LeftSideBar;
