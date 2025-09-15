import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import UserHeader from "../../components/User/UserHeader";
import Navigator from "../../components/User/UserTabs/Navigator";
import ViewProfileSection from "../../components/User/UserTabs/ViewProfileSection";

function ViewProfile() {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/userInfo", { withCredentials: true })
      .then((response) => {
        let data = response.data;
        console.log(data.avatar);
        setUser(data);
      })
      .catch((err) => {
        console.error(err.response.data);
        window.location.href = "/landingPage";
      });
  }, []);

  return (
    <div style={{ maxWidth: "100%", position: "relative" }}>
      <UserHeader user={user} />
      <Navigator first={true} svgSize={50} />
      <ViewProfileSection />
    </div>
  );
}

export default ViewProfile;
