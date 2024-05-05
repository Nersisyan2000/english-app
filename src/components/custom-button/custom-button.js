import React from "react";
import "./custom-button.css";
import { useTranslation } from "react-i18next";
import { Colors } from "../../assets/colors/colors";

export const CustomButton = ({ handleSubmit, buttonTitle }) => {
  const { t } = useTranslation();

  return (
    <div className="customButtonMainDiv">
      <button
        style={{ backgroundColor: Colors.PURPLE, color: Colors.WHITE }}
        className="customButtonStyle"
        onClick={handleSubmit}
        type="submit"
      >
        {buttonTitle}
      </button>
    </div>
  );
};
