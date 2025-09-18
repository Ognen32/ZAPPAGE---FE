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

  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        minWidth: "fit-content",
        height: "100%",
        padding: "10px 14px",
        backgroundColor: "#242020",
        textAlign: "center",
        color: "#E0E0E0",
        fontFamily: "Bangers, sans-serif",
        fontSize: "16px",
        boxSizing: "border-box",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      {!isExpand && (
        <>
          <img src={ZappageLogo} alt="Zappage Logo" />
          <img src={divider} style={{ width: "100%" }} alt="Divider" />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              height: "100%",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                width: "100%",
                height: "fit-content",
                boxSizing: "border-box",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "30px",
                  color: "#FFE500",
                  margin: 0,
                  padding: 0,
                }}
                className="selector"
              >
                You Are Reading!
              </h1>
              <p style={{ fontSize: "18px", margin: 0, padding: 0, width: "170px" }}>
                {title}
              </p>
            </div>

            {/* Page menu button */}
            <button
              id="page-menu-button"
              onClick={handleMenuOpen}
              aria-controls={anchorEl ? "page-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? "true" : undefined}
              type="button"
              style={{
                fontSize: "16px",
                display: "flex",
                backgroundColor: "#141212",
                borderRadius: "8px",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "#E0E0E0",
                width: "100%",
                position: "relative",
                color: "#E0E0E0",
                paddingTop: "6px",
                paddingBottom: "6px",
                justifyContent: "center"
              }}
            >
              Page {currentPage}
              <ArrowDownIcon
                style={{
                  width: "14px",
                  height: "14px",
                  position: "absolute",
                  right: "5",
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              />
            </button>

            {/* MUI Menu */}
            <Menu
              slotProps={{
                transition: { timeout: { enter: 200, exit: 0 } },
              }}
              id="page-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{ "aria-labelledby": "page-menu-button", dense: true }}
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
              }}
            >
              {pagesArray.map((page, index) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    updateCurrentPageOnServer(index + 1);
                    setCurrentPage(index + 1);
                    handleMenuClose();
                  }}
                  style={{
                    backgroundColor: page === currentPage ? "#242020" : "transparent",
                    color: page === currentPage ? "#FFFFFF" : "#E0E0E0",
                    fontSize: "10.4px",
                    fontWeight: 600,
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                >
                  {page === currentPage ? "• " : ""}
                  Page {page}
                </MenuItem>
              ))}
            </Menu>

            {/* Prev/Next buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: "10px",
                height: "fit-content",
              }}
            >
              <button
                disabled={currentPage === 1}
                onClick={goToPrevPage}
                style={{
                  fontSize: "10px",
                  backgroundColor: "#141212",
                  borderRadius: "4px",
                  border: "2px solid #E0E0E0",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "4px 0",
                  margin: 0,
                  opacity: currentPage === 1 ? 0.5 : 1,
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                }}
              >
                <ArrowLeftIcon style={{ width: "14px", height: "14px" }} />
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={goToNextPage}
                style={{
                  fontSize: "12px",
                  borderRadius: "4px",
                  border: "2px solid #E0E0E0",
                  backgroundColor: "#141212",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "4px 0",
                  margin: 0,
                  opacity: currentPage === totalPages ? 0.5 : 1,
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                }}
              >
                <ArrowRightIcon style={{ width: "14px", height: "14px" }} />
              </button>
            </div>
          </div>
        </>
      )}

      {/* Expand/collapse toggle */}
      <div
        onClick={toggleExpand}
        style={{
          marginTop: "auto",
          border: "2px solid",
          borderColor: isExpand ? "#242020" : "#E0E0E0",
          borderRadius: "4px",
          cursor: "pointer",
          padding: "8px",
          width: "fit-content",
          backgroundColor: isExpand ? "#E0E0E0" : "#141212",
          color: isExpand ? "#141212" : "#E0E0E0",
        }}
      >
        <ExpandIcon style={{ width: "18px", height: "18px" }} />
      </div>
    </div>
  );
}

export default SideBar;
