import React from "react";
import { Pagination } from "antd";
import "./custom-pagination.css";
import { useDispatch } from "react-redux";
import { nativeLanguageGetThunk } from "../../store/slices/native-language/native-language-get";

export const CustomPagination = (length) => {
  const onShowSizeChange = (current, pageSize) => {};
  const dispatch = useDispatch();

  const onChange = (current, pageSize) => {
    const data = {
      skip: current == 1 ? current - 1 : current + 10,
      limit: 12,
    };
    dispatch(nativeLanguageGetThunk(data));
  };

  return (
    <div>
      <Pagination
        onChange={onChange}
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={1}
        total={length?.length}
      />
    </div>
  );
};
