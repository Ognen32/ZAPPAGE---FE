import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserMainPage from "./pages/User/UserMainPage";
import SearchComicsPage from "./pages/User/SearchComicsPage";
import ViewProfile from "./pages/User/ViewProfileTab";
import MyLibrary from "./pages/User/MyLibraryTab";
import MyFavorites from "./pages/User/MyFavoriteTab";
import ComicView from "./pages/User/ComicView";
import ComicManagment from "./pages/Admin/ComicManagementPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingPage" element={<LandingPage />} />

        <Route path="/welcomeUser" element={<UserMainPage />} />
        <Route path="/search" element={<SearchComicsPage />} />
        <Route path="/user/viewProfile" element={<ViewProfile />} />
        <Route path="/user/myLibrary" element={<MyLibrary />} />
        <Route path="/user/favouriteComics" element={<MyFavorites/>} />
        <Route path="/comic/:slug" element={<ComicView/>} />

        <Route path="/admin/ComicManagement" element={<ComicManagment/>} />
      </Routes>
    </Router>
  );
}

export default App;
