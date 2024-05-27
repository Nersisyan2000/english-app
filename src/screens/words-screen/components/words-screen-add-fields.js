import React from "react";
import "../words-screen-style.css";
import { CustomAddNew } from "../../../components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const WordsScreenAddFields = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="wordsScreenAddFields">
      <CustomAddNew
        title={t("ADD_NEW_WORDS")}
        onClick={() => onNavigate("/create-word")}
      />
      <CustomAddNew title={t("ADD_WORDS_FROM_EXCEL")} />
      <CustomAddNew title={t("UPDATE_WORDS_FROM_EXCEL")} />
    </div>
  );
};
