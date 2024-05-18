import { Select } from "antd";
import { customSelectOptions } from "../../data/custom-select-data";

export const CustomSelect = ({ title }) => {
  const handleChange = (value) => {};

  return (
    <div>
      <Select
        defaultValue={title}
        className="customSelect"
        onChange={handleChange}
        options={customSelectOptions}
      />
    </div>
  );
};
