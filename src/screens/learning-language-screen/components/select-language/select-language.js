import React, { useState } from "react";
import { CustomSelect } from "../../../../components";
import "./select-language-style.css";
import { Colors } from "../../../../assets/colors";
import { useDispatch, useSelector } from "react-redux";
import { getNativeGetResponse } from "../../../../store/slices/native-language/native-language-get";
import {
  learnLanguageSelectedLanguages,
  removeLanguagesItem,
} from "../../../../store/slices/learn-language/create-learn-language-slice";

export const SelectLanguage = () => {
  const dispatch = useDispatch();
  const languages = useSelector(learnLanguageSelectedLanguages);
  const nativeLanguagesResponse = useSelector(getNativeGetResponse);
  const filteredResponse = nativeLanguagesResponse?.data?.list.map((lang) => {
    return {
      key: lang.id,
      value: lang.name.toLowerCase(),
      label: lang.name,
    };
  });
  console.log(languages, "languages");

  const onDelete = (id) => {
    dispatch(removeLanguagesItem(id));
  };

  return (
    <div className="selectLanguageMainDiv">
      <p className="selectLanguageTitle">Native Language</p>
      <CustomSelect
        title="Choose Native Language *"
        optionsData={filteredResponse}
      />
      <div className="selectLanguageValuesDiv">
        {languages?.map((lang) => {
          return (
            <div
              key={lang.id}
              className="selectLanguageValuesDivItem"
              style={{ backgroundColor: Colors.BACKGROUND_COLOR }}
            >
              <span>{lang.label}</span>
              <img src={lang.image} />
              <div
                className="deleteIcon"
                onClick={() => {
                  onDelete(lang.key);
                }}
              >
                <span>x</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
