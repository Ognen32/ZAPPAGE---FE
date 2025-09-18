import React, { useState, useRef } from "react";
import "../../styles/AdminView.css";
import SVGTitleAndSearchContainer from "./SVGTitleAndSearchContainer";
import { ComicManagmenet } from "./AdminSVGs";
import ComicsPagination from "./ComicsPagination";
import AddComicForm from "./AddComicForm";
import ComicsList from "./ComicsList";
import UpdateComicForm from "./UpdateComicForm";

function ComicManagementContainer() {
  const [showAddComicForm, setShowAddComicForm] = useState(false);
  const [showUpdateComicForm, setShowUpdateComicForm] = useState(false);
  const [comicToUpdate, setComicToUpdate] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const waitingIntervalRef = useRef(null);

  const toggleAddComicForm = () => {
    setShowAddComicForm((prev) => !prev);
    setShowUpdateComicForm(false);
    setErrorMessage("");
  };

  const handleUpdateClick = (comic) => {
    setComicToUpdate(comic);
    setShowUpdateComicForm(true);
    setShowAddComicForm(false);
  };

  const handleShowWaiting = () => {
    let dotCount = 1;
    setSuccessMessage("Waiting.");

    waitingIntervalRef.current = setInterval(() => {
      dotCount = dotCount === 3 ? 1 : dotCount + 1;
      setSuccessMessage("Waiting" + ".".repeat(dotCount));
    }, 500);
  };

  const stopWaitingWithSuccess = () => {
    clearInterval(waitingIntervalRef.current);
    setSuccessMessage("success");
  };

  const stopWaitingWithFailed = () => {
    clearInterval(waitingIntervalRef.current);
    setSuccessMessage("");
  };

  const createshowError = (message) => {
    setErrorMessage(message);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
        width: "100%",
        boxSizing: "border-box",
        paddingTop: "68px",
        paddingBottom: "68px",
      }}
    >
      <div className="BookManagementContainerOuter">
        <SVGTitleAndSearchContainer
          title={"Comic Management"}
          Image={ComicManagmenet}
          svgSize="48"
          showAddComicForm={showAddComicForm}
          errorMessage={errorMessage}
          successMessage={successMessage}
        />

        {/* 🟢 ако е активна Update форма */}
        {showUpdateComicForm ? (
          <UpdateComicForm
            comicId={comicToUpdate.id}
            cancelButton={() => setShowUpdateComicForm(false)}
            createshowError={createshowError}
            handleShowWaiting={handleShowWaiting}
            stopWaitingWithSuccess={stopWaitingWithSuccess}
            stopWaitingWithFailed={stopWaitingWithFailed}
          />
        ) : showAddComicForm ? (
          /* 🟢 ако е активна Add форма */
          <AddComicForm
            cancelButton={toggleAddComicForm}
            createshowError={createshowError}
            errorMessage={errorMessage}
            handleShowWaiting={handleShowWaiting}
            stopWaitingWithSuccess={stopWaitingWithSuccess}
            stopWaitingWithFailed={stopWaitingWithFailed}
          />
        ) : (
          /* 🟢 default view: Pagination + ComicsList */
          <>
            <ComicsPagination addComic={toggleAddComicForm} />
            <ComicsList onUpdateClick={handleUpdateClick} />
          </>
        )}
      </div>
    </div>
  );
}

export default ComicManagementContainer;
