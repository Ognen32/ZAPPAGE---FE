import React, { useState, useEffect } from "react";
import "../../styles/AdminView.css";
import SVGTitleAndSearchContainer from "./SVGTitleAndSearchContainer";
import { UserManagement } from "./AdminSVGs";
import UserList from "./UserList.jsx";
import UpdateUserForm from "./UpdateUserForm";
import axios from "axios";

function UserManagementContainer({
  createshowError,
  errorMessage,
  handleShowWaiting,
  stopWaitingWithSuccess,
  stopWaitingWithFailed,
}) {
  const [showUpdateUserForm, setShowUpdateUserForm] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(null);
  const [users, setUsers] = useState([]);

  // Fetch users function
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  };

  // Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdateClick = (user) => {
    setUserToUpdate(user);
    setShowUpdateUserForm(true);
  };

  const handleUserListChange = () => {
    fetchUsers();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        paddingTop: "68px",
        paddingBottom: "68px",
      }}
    >
      <div className="BookManagementContainerOuter" style={{ position: "relative" }}>
        <SVGTitleAndSearchContainer
          title={"User Management"}
          Image={UserManagement}
          svgSize="48"
        />

        {/* 🟢 Update UserForm Overlay */}
        {showUpdateUserForm && (
          <div className="updateUserOverlay">
            <UpdateUserForm
              userData={userToUpdate}
              onClose={() => setShowUpdateUserForm(false)}
              onSuccess={() => {
                fetchUsers();
                setShowUpdateUserForm(false);
              }}
              createshowError={createshowError}
              handleShowWaiting={handleShowWaiting}
              stopWaitingWithSuccess={stopWaitingWithSuccess}
              stopWaitingWithFailed={stopWaitingWithFailed}
            />
          </div>
        )}

        {/* 🟢 Users list only when Update form is not shown */}
        {!showUpdateUserForm && (
          <UserList
            users={users}
            onUpdateClick={handleUpdateClick}
            onUsersChanged={handleUserListChange}
          />
        )}
      </div>
    </div>
  );
}

export default UserManagementContainer;
