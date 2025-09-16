import React, { useState, useRef } from "react";
import "../../styles/AdminView.css";
import SVGTitleAndSearchContainer from "./SVGTitleAndSearchContainer";
import { ComicManagmenet } from "./AdminSVGs";
import ComicsPagination from "./ComicsPagination";
import AddComicForm from "./AddComicForm";

function ComicManagementContainer() {
  const [showAddComicForm, setshowAddComicForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const waitingIntervalRef = useRef(null);

  const toggleAddComicForm = () => {
    setshowAddComicForm((prev) => !prev);
    setErrorMessage("");
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
        {!showAddComicForm && (
          <ComicsPagination addComic={toggleAddComicForm} />
        )}
        {showAddComicForm && (
          <AddComicForm
            cancelButton={toggleAddComicForm}
            createshowError={createshowError}
            errorMessage={errorMessage}
            handleShowWaiting={handleShowWaiting}
            stopWaitingWithSuccess={stopWaitingWithSuccess}
            stopWaitingWithFailed={stopWaitingWithFailed}
          />
        )}
      </div>
    </div>
  );
}

export default ComicManagementContainer;
