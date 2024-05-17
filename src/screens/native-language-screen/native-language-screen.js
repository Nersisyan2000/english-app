import React, { useEffect } from "react";
import { CustomAddNew } from "../../components/custom-add-new/custom-add-new";
import { CustomCountryItem } from "../../components/custom-country-item/custom-country-item";
import "./native-language-style.css";
import { CustomPagination } from "../../components";
import { useNavigate } from "react-router-dom";
import {
  getNativeGetResponse,
  nativeLanguageGetThunk,
} from "../../store/slices/native-language/native-language-get";
import { useDispatch, useSelector } from "react-redux";

export const NativeLanguageScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nativeLanguageData = useSelector(getNativeGetResponse);
  console.log(nativeLanguageData, "log data");
  const token = localStorage.getItem("token");
  const nativeData = nativeLanguageData?.data?.list;

  const navigateNativeUpdate = () => {
    navigate("/native-update");
  };
  const data = {
    skip: 0,
    limit: 12,
  };
  useEffect(() => {
    dispatch(nativeLanguageGetThunk(data));
  }, []);
  return (
    <div className="nativeLanguageScreenMainDiv">
      <div>
        <CustomAddNew
          title={"Add New Language"}
          onClick={() => {
            navigate("/native-language-create");
          }}
        />
        <p className="nativeLanguageTitle">Native Language</p>
        <div className="nativeLanguageCountryItems">
          {nativeData?.map((countryItem) => {
            return (
              <div onClick={navigateNativeUpdate} className="pointer">
                <CustomCountryItem
                  icon={countryItem.imageFile.path}
                  title={countryItem.name}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="nativeScreenPaginationDiv">
        <CustomPagination length={nativeLanguageData?.data?.total} />
      </div>
    </div>
  );
};
