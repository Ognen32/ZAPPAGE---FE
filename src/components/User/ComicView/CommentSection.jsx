import React, { useEffect, useState, forwardRef } from "react";
import CommentButton from "./CommentSVG";
import axios from "axios";
import CommentItem from "./CommentItem";
import "../../../styles/User/ComicView.css";

const CommentSection = forwardRef(({ comicId, user }, ref) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (!comicId) return;
    axios
      .get(`http://localhost:3000/api/comments/comic/${comicId}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error("Error fetching comments:", err));
  }, [comicId]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    try {
      const res = await axios.post(
        "http://localhost:3000/api/comment",
        { comicId, text: newComment },
        { withCredentials: true }
      );
      setComments((prev) => [res.data, ...prev]);
      setNewComment("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  return (
    <div ref={ref} className="commentSection">
      <div className="commentHeaderSection">
        <h4>Comments</h4>
        <div className="divider"></div>
        <CommentButton />
      </div>

      <div className="commentInputBox">
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Post</button>
      </div>

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
});

export default CommentSection;
