import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/AdminView.css";

function UserList({ onUpdateClick }) {
  const [users, setUsers] = useState([]);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

 const fetchUsers = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/users");
    setUsers(res.data);
    if (onUsersChanged) onUsersChanged(res.data);
  } catch (err) {
    console.error("Failed to fetch users", err);
  }
};

  const handleDeleteClick = (user) => setUserToDelete(user);

  const confirmDelete = async () => {
    if (!userToDelete) return;
    try {
      await axios.delete(`http://localhost:3000/api/users/delete/${userToDelete.id}`);
      setUserToDelete(null);
      fetchUsers();
    } catch (err) {
      console.error("Failed to delete user:", err);
      setUserToDelete(null);
    }
  };

  const cancelDelete = () => setUserToDelete(null);

  return (
    <div className="usersListWrapper">
      <div className="usersGrid">
        {users.map((user) => (
          <div className="userCard" key={user.id}>
            <img src={user.avatar} alt={user.userName} className="userAvatar" />
            <div className="userName">{user.userName}</div>
            <div className="userActions">
              <button className="updateBtn" onClick={() => onUpdateClick(user)}>Update</button>
              <button className="deleteBtn" onClick={() => handleDeleteClick(user)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {userToDelete && (
        <div className="popupOverlay">
          <div className="popupContent">
            <div style={{ marginBottom: "15px" }}>
              <svg
                width="95"
                height="112"
                viewBox="0 0 95 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="47.5"
                  cy="56.5"
                  r="46"
                  fill="white"
                  stroke="#FF0000"
                  strokeWidth="3"
                />
                <path
                  d="M44.6515 71.104L43.6915 27.904H51.6595L50.6995 71.104H44.6515ZM47.6755 88.864C46.0435 88.864 44.6995 88.352 43.6435 87.328C42.5875 86.304 42.0595 85.024 42.0595 83.488C42.0595 81.984 42.5875 80.704 43.6435 79.648C44.6995 78.56 46.0435 78.016 47.6755 78.016C49.2755 78.016 50.6195 78.56 51.7075 79.648C52.8275 80.704 53.3875 81.984 53.3875 83.488C53.3875 85.024 52.8275 86.304 51.7075 87.328C50.6195 88.352 49.2755 88.864 47.6755 88.864Z"
                  fill="#FF0000"
                />
              </svg>
            </div>
            <h2>Warning</h2>
            <p>Are you sure you want to delete "<span>{userToDelete.userName}</span>"?</p>
            <div className="popupButtons">
              <button onClick={confirmDelete}>Delete</button>
              <button onClick={cancelDelete}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;
