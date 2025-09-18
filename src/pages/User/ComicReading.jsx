import React from "react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import SideBar from "../../components/User/ComicRead/sidebar";
import Pages from "../../components/User/ComicRead/pages";

function ComicReading() {
  const [user, setUser] = useState({});
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(null);
  const [pages, setPages] = useState([]);
  const [title, setTitle] = useState("");
  const [isExpand, setExpand] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const toggleExpand = () => {
    setExpand(!isExpand);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/userInfo", { withCredentials: true })
      .then((response) => {
        let data = response.data;
        console.log(data);
        setUser(data);
      })
      .catch((err) => {
        console.error(err.response.data);
        window.location.href = "/landingPage";
      });
  }, []);

  useEffect(() => {
    if (!slug) return;

    axios
      .get(`http://localhost:3000/api/comicRead/${slug}`, { withCredentials: true })
      .then((response) => {
        const data = response.data;
        const newPages = data.pages;
        const title = data.comicTitle;
        const totalPages = data.totalPages;
        console.log("Fetched comic data:", data);

        if (typeof data.currentUserPage === "number") {
          setCurrentPage(data.currentUserPage);
        } else {
          console.warn("currentUserPage not found in response:", data);
          setCurrentPage(1);
        }

        setPages(newPages);
        setTitle(title);
        setTotalPages(totalPages);
        console.log(newPages);
      })
      .catch((err) => {
        console.error(
          "Failed to fetch comic:",
          err?.response?.data || err.message
        );
      });
  }, [slug, currentPage]);

  // Update current page on backend
  const updateCurrentPageOnServer = async (page) => {
    try {
      await axios.post(
        `http://localhost:3000/api/comicRead/${slug}/updateCurrentPage`,
        { newPageNumber: page },
        { withCredentials: true }
      );
    } catch (error) {
      console.error("Failed to update current page:", error);
    }
  };

  // Go to previous page
  const goToPrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      updateCurrentPageOnServer(newPage);
    }
  };

  // Go to next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      updateCurrentPageOnServer(newPage);
    }
  };

  return (
    <div className="sm:hidden md:flex md:flex-row h-screen w-full bg-bg">
      <SideBar
        title={title}
        currentPage={currentPage}
        totalPages={totalPages}
        isExpand={isExpand}
        toggleExpand={toggleExpand}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        setCurrentPage={setCurrentPage}
        updateCurrentPageOnServer={updateCurrentPageOnServer}
      />
      <Pages pages={pages} currentPage={currentPage} />
    </div>
  );
}

export default ComicReading;
