import React from "react";
import { Pagination } from "antd";
import { useDispatch } from "react-redux";
import { nativeLanguageGetThunk } from "../../store/slices/native-language/native-language-get";
import "./custom-pagination.css";
import { categoryGetThunk } from "../../store/slices/category/get-category";
import { learningLanguagesThunk } from "../../store/slices";

export const CustomPagination = (length , func) => {
  const dispatch = useDispatch();
  const pageCount = (length?.length / 12) * 10
  const roundNumber = Math.ceil(pageCount)

  const onChange = (current) => {
    const skip =( current -1) * 12;
    const data = {
      skip: skip,
      limit: 12,
    }
    dispatch(learningLanguagesThunk(data));
    dispatch(categoryGetThunk(data));
    dispatch(nativeLanguageGetThunk(data));
  };

  return (
    <div>
      <Pagination
        onChange={onChange}
        showSizeChanger
        defaultCurrent={1}
        total={roundNumber}
      />
    </div>
  );
};
