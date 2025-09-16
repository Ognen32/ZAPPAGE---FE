import React from "react";
import  "../../styles/AdminView.css";
import {
  ComicManagmenet,
  UserManagement,
} from "./AdminSVGs";
import NavigationItem from "./NavigationItem";

function Navigation({ user, first, second }) {
  console.log(user);
  return (
    <section id="NaivagorAdminContainer">
      <h1>Hello, Admin {user?.firstName ?? "Admin"}</h1>
      <div className="NaivagorAdminItemsContainer">
        <NavigationItem
          title="Comic Management"
          Image={ComicManagmenet}
          color={first ? "white" : "black"}
          link="/admin/ComicManagement"
        />
        <NavigationItem
          title="User Management"
          Image={UserManagement}
          color={second ? "white" : "black"}
          link="/admin/UserManagement"
        />
      </div>
    </section>
  );
}

export default Navigation;
