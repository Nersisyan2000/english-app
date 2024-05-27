import React, { useState, useEffect } from "react";
import "./words-screen-style.css";
import { Colors } from "../../assets/colors";
import { CustomPagination, CustomTable } from "../../components";
import { useTranslation } from "react-i18next";
import { WordsScreenAddFields, WordsScreenSelects } from "./components";
import { useDispatch, useSelector } from "react-redux";
import {
  getWordsThunk,
  wordsLoadingData,
  wordsResponseData,
} from "../../store/slices";

export const WordsScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const wordsResponse = useSelector(wordsResponseData);
  const wordsLoading = useSelector(wordsLoadingData);

  useEffect(() => {
    const data = {
      skip: 0,
      limit: 12,
    };
    dispatch(getWordsThunk(data));
  }, []);

  return (
    <div
      className="screensMainDiv wordsScreenMainDiv"
      style={{ backgroundColor: Colors.WHITE }}
    >
      <WordsScreenAddFields />
      <p className="wordsScreenTitle">{t("WORDS")}</p>
      <WordsScreenSelects />
      <div style={{ height: 360 }} className="wordsScreenTable">
        <CustomTable />
      </div>
      <div className="wordsPagination">
        <CustomPagination />
      </div>
    </div>
  );
};
