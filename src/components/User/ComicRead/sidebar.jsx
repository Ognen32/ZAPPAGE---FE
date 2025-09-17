import React, { useState } from "react";
import ZappageLogo from "../../../assets/ZaPPAGE_mAIN.png";
import divider from "../../../assets/divider_Reader.png";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExpandIcon,
  ArrowDownIcon,
} from "./icons";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

function SideBar({
  title,
  currentPage,
  totalPages,
  isExpand,
  toggleExpand,
  goToNextPage,
  goToPrevPage,
  setCurrentPage,
  updateCurrentPageOnServer,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePageSelect = (pageNumber) => {
    console.log("Selected page:", pageNumber);
    // TODO: Implement routing or page update here
    handleMenuClose();
  };

  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="md:flex md:flex-col gap-0 min-w-fit h-full px-3.5 py-2.5 bg-bg-secondary text-center text-text font-bangers text-xl box-border items-center z-10">
      {!isExpand && (
        <>
          <img src={ZappageLogo} className="mb-3" alt="Zappage Logo" />
          <img src={divider} className="w-full" alt="Divider" />

          <div className="md:flex md:flex-col gap-2.5 h-full items-center">
            <div className="flex flex-col gap-0 w-full h-fit box-border items-center">
              <h1 className="text-xl text-outline-red m-0 p-0">
                You Are Reading!
              </h1>
              <p className="text-sm m-0 p-0 w-[170px]">{title}</p>
            </div>

            {/* Material UI styled button trigger */}
            <button
              id="page-menu-button"
              className="text-xs bg-bg rounded-sm border-2 border-text w-full relative text-text"
              onClick={handleMenuOpen}
              aria-controls={anchorEl ? "page-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? "true" : undefined}
              type="button"
            >
              Page {currentPage}
              <ArrowDownIcon className="w-2.5 h-2.5 absolute right-1 top-1/2 -translate-y-1/2" />
            </button>

            {/* MUI Menu with selected styling + dividers */}
            <Menu
              slotProps={{
                transition: {
                  timeout: { enter: 200, exit: 0 }, // disables close animation
                },
              }}
              id="page-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "page-menu-button",
                dense: true,
              }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              PaperProps={{
                style: {
                  width: anchorEl ? anchorEl.clientWidth : undefined,
                  maxHeight: 200,
                  backgroundColor: "#141212",
                  color: "#E0E0E0",
                  overflowY: "auto",
                  border: "2px solid #E0E0E0",
                },
                sx: {
                  "&::-webkit-scrollbar": { display: "none" },
                  scrollbarWidth: "none",
                },
              }}
            >
              {pagesArray.map((page, index) => (
                <React.Fragment key={page}>
                  <MenuItem
                    onClick={() => {
                      updateCurrentPageOnServer(index + 1);
                      setCurrentPage(index + 1);
                    }}
                    sx={{
                      backgroundColor:
                        page === currentPage ? "#242020" : "transparent",
                      color: page === currentPage ? "#FFFFFF" : "#E0E0E0",
                      fontSize: "0.65rem", // text-xs
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                      paddingY: "6px",
                    }}
                  >
                    {page === currentPage ? "• " : ""}
                    Page {page}
                  </MenuItem>
                </React.Fragment>
              ))}
            </Menu>

            {/* Prev/Next Buttons */}
            <div className="flex flex-row w-full gap-2.5 h-fit">
              <button
                disabled={currentPage === 1}
                onClick={goToPrevPage}
                className="text-xs bg-bg rounded-sm border-2 border-text w-full flex justify-center items-center py-1 m-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeftIcon className="w-2.5 h-2.5" />
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={goToNextPage}
                className="text-xs bg-bg rounded-sm border-2 border-text w-full flex justify-center items-center py-1 m-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowRightIcon className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </>
      )}

      {/* Expand/Collapse toggle */}
      <div
        onClick={toggleExpand}
        className={`mt-auto border-2 rounded-sm cursor-pointer p-2 w-fit ${
          isExpand ? "bg-text text-bg border-bg" : "border-text bg-bg"
        }`}
      >
        <ExpandIcon className="w-3 h-3" />
      </div>
    </div>
  );
}

export default SideBar;
