import React, { useState } from "react";
import axios from "axios";
import "../../../styles/User/CommentItem.css"

function CommentItem({ comment, user, setComments }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const isOwner = user.id === comment.userId;

  // Delete comment
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/comment/${comment.id}`, {
        withCredentials: true,
      });
      setComments((prev) => prev.filter((c) => c.id !== comment.id));
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  // Edit comment
  const handleEdit = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:3000/api/comment/${comment.id}`,
        { text: editText },
        { withCredentials: true }
      );
      setComments((prev) =>
        prev.map((c) => (c.id === comment.id ? res.data : c))
      );
      setIsEditing(false);
    } catch (err) {
      console.error("Error editing comment:", err);
    }
  };

  return (
    <div className="commentItem">
      <div className="commentHeader">
        <img
          src={comment.User?.avatar || "/default-avatar.png"}
          alt={comment.User?.userName || "User"}
          className="commentAvatar"
        />
        <strong className="commentUsername">{comment.User?.userName || "Anonymous"}</strong>
      </div>

      {isEditing ? (
        <div className="commentEditContainer">
          <input
            className="commentEditInput"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="commentSaveBtn" onClick={handleEdit}>Save</button>
          <button className="commentCancelBtn" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <p className="commentText">{comment.text}</p>
      )}

      {isOwner && !isEditing && (
        <div className="commentActions">
          <button className="commentEditBtn" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="commentDeleteBtn" onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default CommentItem;
