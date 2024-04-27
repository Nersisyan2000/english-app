import React from "react";
import "./custom-input-styl.css";
import { useTranslation } from "react-i18next";
import { Colors } from "../../assets/colors/colors";

export const CustomInputField = ({
  name,
  placeholder,
  label,
  isForgot,
  onChange,
  onBlur,
}) => {
  const { t } = useTranslation();

  return (
    <div className="customInputMainDiv">
      <div className="customInputLabelDiv">
        <p className="label">{label}</p>
        {isForgot ? (
          <a
            href="#"
            style={{ color: Colors.PURPLE }}
            className="label forgotLabel"
          >
            {t("FORGOT")} ?
          </a>
        ) : null}
      </div>
      <input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className="inputStyle"
        style={{ backgroundColor: Colors.INPUT_BACKGROUND }}
      />
    </div>
  );
};
