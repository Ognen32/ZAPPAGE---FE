import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import UserHeader from "../../components/User/UserHeader";
import Navigator from "../../components/User/UserTabs/Navigator";
import MyLibrarySection from "../../components/User/UserTabs/MyLibrarySection";

function MyLibrary() {
  const [user, setUser] = useState({});
  const [myLibrary, setMyLibrary] = useState({});
  const [loading, setLoading] = useState(true); // 👈 Add this
  
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
        window.location.href = "/welcome";
      });
  }, []);

 /* useEffect(() => {
    axios
      .get("http://localhost:3000/api/transcation/myLibrary", {
        withCredentials: true,
      })
      .then((response) => {
        if (response) {
          let data = response.data;
          setMyLibrary(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err.response.data);
        window.location.href = "/welcome";
      });
  }, []);
  if (loading) {
    return <p style={{ padding: "100px", fontSize: "20px" }}></p>;
  } */

  return (
    <div style={{ maxWidth: "100%", position: "relative" }}>
      <UserHeader user={user} />
      <Navigator second={true} svgSize={50} />
      <MyLibrarySection myLibrary={myLibrary} />
    </div>
  );
}

export default MyLibrary;