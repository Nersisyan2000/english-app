import React, { useState } from "react";
import { CustomSelect } from "../../../../components";
import "./select-language-style.css";
import { Colors } from "../../../../assets/colors";
import { useDispatch, useSelector } from "react-redux";
import { getNativeGetResponse } from "../../../../store/slices/native-language/native-language-get";
import { CustomSpin } from "../../../../components/custom-spin/custom-spin";
import {
  addLanguages,
  removeSelectedLanguagesItem,
} from "../../../../store/slices";

export const SelectLanguage = ({ languages, onDelete, loading }) => {
  const dispatch = useDispatch();
  const nativeLanguagesResponse = useSelector(getNativeGetResponse);

  const filteredResponse = nativeLanguagesResponse?.data?.list.map((lang) => {
    return {
      _id: lang.id,
      name: lang.name.toLowerCase(),
      nameEng: lang.name,
    };
  });

  const selectedDelete = (id) => {
    onDelete(id);

    const onDelete = (id) => {
      dispatch(removeSelectedLanguagesItem(id));
    };

    // useEffect(() => {
    //   dispatch(addLanguages(filteredResponse));
    // }, [nativeLanguagesResponse?.nativeLanguages]);

    return (
      <div className="selectLanguageMainDiv">
        <p className="selectLanguageTitle">Native Language</p>
        <CustomSelect
          title="Choose Native Language *"
          optionsData={filteredResponse}
        />
        <div className="selectLanguageValuesDiv">
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
                width: "100%",
              }}
            >
              <CustomSpin color={Colors.ICON_COLOR} size={38} />
            </div>
          ) : (
            languages?.map((lang) => {
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
                      selectedDelete(lang._id);
                    }}
                  >
                    <span>x</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  };
};
