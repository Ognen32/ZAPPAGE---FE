import React from "react";
import CommentButton from "./CommentSVG";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentItem from "./CommentItem";
import "../../../styles/User/ComicView.css";

function CommentSection({ comicId, user }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch comments for this comic
  useEffect(() => {
     if (!comicId) return;
    axios
      .get(`http://localhost:3000/api/comments/comic/${comicId}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error("Error fetching comments:", err));
  }, [comicId]);

  // Add new comment
  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    try {
      const res = await axios.post(
        "http://localhost:3000/api/comment",
        { comicId, text: newComment },
        { withCredentials: true }
      );
      setComments((prev) => [res.data, ...prev]); // add to top
      setNewComment("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  return (
    <div className="commentSection">
      <div className="commentHeaderSection">
        <h4>Comments</h4>
        <div className="divider"></div>
        <CommentButton/>
      </div>

      {/* Comment input */}
      <div className="commentInputBox">
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Post</button>
      </div>

      {/* Comment list */}
      <div className="commentList">
        {comments.map((c) => (
          <CommentItem
            key={c.id}
            comment={c}
            user={user}
            setComments={setComments}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentSection;
