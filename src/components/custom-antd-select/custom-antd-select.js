import React from "react";
import { Select, Space } from "antd";
import "./custom-antd-select.css";

export const CustomAntdSelect = ({
  optinData,
  setSelected,
  defaultValue,
  width,
  color,
}) => {
  const handleChange = (value) => {
    setSelected(value);
  };

  return (
    <div className="antd_custom_select">
      <Space wrap>
        <Select
          onChange={handleChange}
          defaultValue={defaultValue}
          style={{
            color: color,
          }}
          allowClear
          options={optinData}
        />
      </Space>
    </div>
  );
};
