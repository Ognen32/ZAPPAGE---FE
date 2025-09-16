import React from "react";
import "../../styles/AdminView.css";
import { DivLine } from "./AdminSVGs";

function ComicsPagination({ addComic, showAddComicForm }) {
  return (
    <div className="BooksPaginationWithButtonsContainer">
      <div className="headersAndButtonRow">
        <div style={{ display: "flex", gap: "45px" }}>
          <p>S/N</p>
          <p>Cover</p>
          <p>Title</p>
        </div>
        <input type="button" value="Add Comic" onClick={addComic} />
      </div>
      <DivLine />
    </div>
  );
}

export default ComicsPagination;
