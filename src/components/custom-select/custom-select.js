import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addLanguages,
  learnLanguageSelectedLanguages,
} from "../../store/slices/learn-language/create-learn-language-slice";

const { Option } = Select;

export const CustomSelect = ({ title, optionsData }) => {
  const dispatch = useDispatch();
  const languages = useSelector(learnLanguageSelectedLanguages);
  const handleChange = (value) => {
    console.log(value, "value");
    const selectedOption = optionsData.find((option) => option.key === value);
    dispatch(addLanguages(selectedOption));
  };

  return (
    <div>
      <Select
        onChange={handleChange}
        className="customSelect"
        defaultValue={title}
      >
        {optionsData?.map((option) => (
          <Option key={option.key} value={option.key}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};
