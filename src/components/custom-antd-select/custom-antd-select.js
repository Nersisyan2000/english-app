import React from "react";
import { Form, Select, Space } from "antd";
import "./custom-antd-select.css";

export const CustomAntdSelect = ({
  optinData,
  setSelected,
  defaultValue,
  width,
  color,
  name
}) => {
  const handleChange = (value) => {
    setSelected(value);
  };

  return (
    <div className="antd_custom_select_user">
      <Form.Item
      name={name}>
        <Select
          onChange={handleChange}
          defaultValue={defaultValue}
          style={{
            color: color,
            width:`${width}`
          }}
          allowClear
          options={optinData}
        />
      </Form.Item>
    </div>
  );
};
