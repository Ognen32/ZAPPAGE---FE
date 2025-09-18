import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../../components/Admin/AdminHeader";
import Navigation from '../../components/Admin/Navigation';
import UserManagementContainer from '../../components/Admin/UserManagementContainer';
import FireFooter from "../../components/Global/FireFooter";


function UserManagmentAdmin() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/userInfo", { withCredentials: true })
      .then((response) => {
        let data = response.data;
        console.log(data.avatar);
        setUser(data);
        if (data.role === "user") {
          window.location.href = "/welcomeUser";
        }
      })
      .catch((err) => {
        console.error(err.response.data);
        window.location.href = "/landingPage";
      });
  }, []);
  return (
    <div style={{ maxWidth: "100%", position: "relative" }}>
      <AdminHeader user={user} />
      <Navigation user={user} second={true} />
      <UserManagementContainer />
      <FireFooter />
    </div>
  );
}

export default UserManagmentAdmin;
