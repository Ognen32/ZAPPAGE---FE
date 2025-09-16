import React, { useRef } from "react";
import "../../../styles/User/ComicView.css";
import ShareFavCommentButtons from "./ShareFavCommentButtons";
import CommentSection from "./CommentSection";

function ComicDetailsContainer({ comic, user }) {
  const commentsRef = useRef(null); // Додај референца до коментари

  return (
    <section id="bookContrainerOuter">
      <div id="bookContrainer">
        <div id="upperContainerInfo">
          <div className="bookTextButtonsContainer">
            <div className="bookImgContainer">
              <img src={comic.mainCover} height={300} width={180} />
            </div>
            <div className="textAndRatingContainer">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  gap: 0,
                }}
              >
                <h1>{comic.title}</h1>
                <h3>{comic.author}</h3>
              </div>
              <p>{comic.shortDescription}</p>
            </div>
          </div>
          <button className="readNow">Read!</button>
          <div className="svgButtonsContainer">
            <ShareFavCommentButtons comic={comic} user={user} commentsRef={commentsRef} />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "black",
            borderRadius: "2px",
          }}
        ></div>

        <div className="descriptionAndInfoContainer">
          <div className="descriptionContainer">
            <h3>Description</h3>
            <p>{comic.description}</p>
          </div>
          <div className="titleAndValueContainer">
            <div className="titleAndValue">
              <h4>Author</h4>
              <p>{comic.author}</p>
            </div>
            <div className="titleAndValue">
              <h4>Published</h4>
              <p>
                {comic.releaseDate
                  ? new Intl.DateTimeFormat("mk-MK", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                      .format(new Date(comic.releaseDate))
                      .replaceAll(".", "/")
                  : "N/A"}
              </p>
            </div>
            <div className="titleAndValue">
              <h4>Publisher</h4>
              <p>{comic.publisher}</p>
            </div>
            <div className="titleAndValue">
              <h4>Genres</h4>
              <p>{comic.Genres?.map((genre) => genre.genre).join(", ")}</p>
            </div>
          </div>
        </div>

        {/* Comment секцијата со референца */}
        <CommentSection ref={commentsRef} comicId={comic.id} user={user} />
      </div>
    </section>
  );
}

export default ComicDetailsContainer;
