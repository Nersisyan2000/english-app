import React from "react";
import "./custom-search-input-style.css";
import { Colors } from "../../assets/colors/colors";
import searchIcon from "../../assets/images/searchIcon.svg";

export const CustomSearchInput = () => {
  return (
    <div
      className="customSearchInputMainDiv"
      style={{ borderColor: Colors.LIGHT_GRAY_WITH_ALFA }}
    >
      <input placeholder="Search Word" className="customSearchInput" />
      <img src={searchIcon} />
    </div>
  );
};
