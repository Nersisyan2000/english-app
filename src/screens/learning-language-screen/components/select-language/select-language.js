import React, { useEffect, useState } from "react";
import { CustomSelect } from "../../../../components";
import "./select-language-style.css";
import { Colors } from "../../../../assets/colors";
import { useDispatch, useSelector } from "react-redux";
import { getNativeGetResponse } from "../../../../store/slices/native-language/native-language-get";

import {
  addLanguages,
  getLearnLanguageByIdResponse,
  learnLanguageSelectedLanguages,
  removeLanguagesItem,
} from "../../../../store/slices";

export const SelectLanguage = ({ nativeLearnLanguages }) => {
  const dispatch = useDispatch();
  const [seletcData, setSelectData] = useState();
  const languages = useSelector(learnLanguageSelectedLanguages);
  const nativeLanguagesResponse = useSelector(getNativeGetResponse);
  const filteredResponse = nativeLanguagesResponse?.data?.list.map((lang) => {
    return {
      _id: lang.id,
      name: lang.name.toLowerCase(),
      nameEng: lang.name,
    };
  });

  console.log(filteredResponse, "logggg");

  const onDelete = (id) => {
    dispatch(removeLanguagesItem(id));
  };

  useEffect(() => {
    dispatch(addLanguages(filteredResponse));
  }, [nativeLanguagesResponse?.nativeLanguages]);

  return (
    <div className="selectLanguageMainDiv">
      <p className="selectLanguageTitle">Native Language</p>
      <CustomSelect
        title="Choose Native Language *"
        optionsData={filteredResponse}
      />
      <div className="selectLanguageValuesDiv">
        {nativeLearnLanguages?.map((lang) => {
          return (
            <div
              key={lang._id}
              className="selectLanguageValuesDivItem"
              style={{ backgroundColor: Colors.BACKGROUND_COLOR }}
            >
              <span>{lang.name}</span>
              <img src={lang.image} />
              <div
                className="deleteIcon"
                onClick={() => {
                  onDelete(lang._id);
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
