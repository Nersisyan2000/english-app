import React, { useState, useEffect } from "react";
import { Form, Upload, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import uploadImage from "../../assets/images/uploadImg.png";
import { CustomAntdButton, CustomAntdInput } from "../../components";
import { Colors } from "../../assets/colors";
import "../../global-styles/global-styles.css";
import { SelectLanguage } from "./components/";
import { nativeLanguageGetThunk } from "../../store/slices/native-language/native-language-get";
import {
  createLearnLanguageThunk,
  learnLanguageCreateResponse,
  learnLanguageSelectedLanguages,
  learnLanguagesCreateSuccess,
} from "../../store/slices/learn-language/create-learn-language-slice";
import { useNavigate } from "react-router-dom";
import { Error, Success } from "../../components/custom-message/custom-message";

export const LearningLanguageCreateScreen = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = new FormData();
  const [learningLanguageFileList, setLearningLanguageFileList] = useState([]);
  const [learningLanguageFile, setLearningLanguageFile] = useState();
  const [showLearningLanguageUpload, setShowLearningLanguageUpload] =
    useState();
  const languages = useSelector(learnLanguageSelectedLanguages);
  const learnLanguageCreateSuccess = useSelector(learnLanguagesCreateSuccess);
  const createLearnLanguageResponse = useSelector(learnLanguageCreateResponse);
  const messageError = createLearnLanguageResponse?.message;
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const data = {
      skip: 0,
      limit: 12,
    };
    dispatch(nativeLanguageGetThunk(data));
  }, []);

  const onFinish = (values) => {
    console.log(values, "values");
    if (values.learningLanguageImage.file != "") {
      formData.append("nameEng", values.nameEng);
      formData.append("name", values.learningLanguageImg);
      formData.append("localization", values.learningLanguageImg);
      formData.append("image", learningLanguageFile);
      languages.forEach((item, ind) => {
        formData.append(`nativeLanguages[${ind}}]`, item.key);
      });
      dispatch(createLearnLanguageThunk(formData));
      form.resetFields();
      setLearningLanguageFile("");
    } else {
      console.log(values);
    }
  };

  const handleChange = (info) => {
    setLearningLanguageFile(info.file);
    setShowLearningLanguageUpload(info.fileList[0]);
    if (!info.fileList[0]) {
      info.file = "";
    }
  };

  const beforeUpload = () => {
    return false;
  };

  useEffect(() => {
    createLearnLanguageResponse?.success === true && Success({ messageApi });
    createLearnLanguageResponse?.success === false &&
      Error({ messageApi, messageError });
    if (learnLanguageCreateSuccess) {
      navigate("/learning-language");
    }
  }, [createLearnLanguageResponse?.success, learnLanguageCreateSuccess]);

  const props = {
    accept: ".png",
    onRemove: (file) => {
      const index = learningLanguageFileList.indexOf(file);
      const newFileList = learningLanguageFileList.slice();
      newFileList.splice(index, 1);
    },
  };

  return (
    <div
      className="authScreenMainDiv"
      style={{ backgroundColor: Colors.WHITE, flexDirection: "row" }}
    >
      <div>
        <p className="nativeLanguageTitle">Add Learning Language</p>
        <Form
          autoComplete="off"
          form={form}
          name="createLearningLanguage"
          onFinish={onFinish}
        >
          <div className="createScreenRowInputs">
            <CustomAntdInput
              name="learningLanguageName"
              placeholder="Language English Name*"
            />
            <CustomAntdInput name="nativeName" placeholder=" Native Name*" />
          </div>

          <Form.Item
            name="learningLanguageImage"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Upload
              onChange={handleChange}
              beforeUpload={beforeUpload}
              {...props}
              maxCount={1}
              listType="picture"
              className="upload-list-inline"
            >
              {learningLanguageFile && showLearningLanguageUpload ? null : (
                <img src={uploadImage} className="upload" />
              )}
            </Upload>
          </Form.Item>

          <Form.Item>
            {contextHolder}
            <CustomAntdButton title="Add" background={Colors.PURPLE} />
          </Form.Item>
        </Form>
      </div>
      <div style={{ width: "44%" }}>
        <SelectLanguage />
      </div>
    </div>
  );
};
