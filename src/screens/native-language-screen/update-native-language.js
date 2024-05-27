import React, { useEffect, useState } from "react";
import { Form, Upload, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import uploadIcon from "../../assets/images/uploadImg.png";
import { CustomAntdButton } from "../../components/custom-antd-button/custom-antd-button";
import { Colors } from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import { CustomAntdButtonDelete, CustomAntdInput } from "../../components";
import {
  deleteNativeDeleteBool,
  deleteNativeDeleteResponse,
  getNativeDeleteBool,
  getNativeDeleteResponse,
  getNativeDeleteloading,
  nativeLanguageDeleteThunk,
} from "../../store/slices/native-language/native-language-delete";
import remove_icon from "../../assets/images/remove_icon.png";
import {
  deleteNativeUpdateBool,
  deleteNativeUpdateResponse,
  getNativeUpdateBool,
  getNativeUpdateData,
  getNativeUpdateLoading,
  nativeLanguageUpdateThunk,
} from "../../store/slices";
import {
  getNativeGetIdResponse,
  nativeLanguageGetIdThunk,
} from "../../store/slices/native-language/get-id-native-language";
import CustomModal from "../../components/custom-modal/custom-modal";
import { Success, Error } from "../../components/custom-message/custom-message";

export const UpdateNativeLanguage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nativeId = localStorage.getItem("nativeId");
  const formData = new FormData();
  const [fileList, setFileList] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryShow, setCategoryShow] = useState();
  const [showCategoryUpload, setCatgeoryShowUpload] = useState();
  const deleteBool = useSelector(getNativeDeleteBool);
  const nativeLanguageData = useSelector(getNativeGetIdResponse)?.data;
  const nativeUpdateLoading = useSelector(getNativeUpdateLoading);
  const nativeDeleteLoading = useSelector(getNativeDeleteloading);
  const nativeUpdateBool = useSelector(getNativeUpdateBool);
  const nativeResponse = useSelector(getNativeDeleteResponse);
  const nativeUpdateResponse = useSelector(getNativeUpdateData);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const onFinish = (values) => {
    if (values.image.file != "") {
      formData.append("nameEng", values.nameEng);
      formData.append("name", values.name);
      categoryShow && formData.append("image", categoryShow);
      formData.append("id", nativeLanguageData.id);
      formData.append("active", nativeLanguageData?.active);
      dispatch(nativeLanguageUpdateThunk(formData));
      form.resetFields();
      setCategoryShow("");
    } else {
      console.log(values, "values");
    }
  };

  useEffect(() => {
    dispatch(nativeLanguageGetIdThunk(nativeId));
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleChange = (info) => {
    setCategoryShow(info.file);
    setCatgeoryShowUpload(info.fileList[0]);
    if (!info.fileList[0]) {
      info.file = "";
    }
  };

  const beforeUpload = () => {
    return false;
  };

  const props = {
    accept: ".png",
    onRemove: (file) => {
      const index = fileList?.indexOf(file);
      const newFileList = fileList?.slice();
      newFileList?.splice(index, 1);
    },
  };

  const messageError = nativeResponse?.message;
  const messageErrorUpdate = nativeUpdateResponse?.message;

  useEffect(() => {
    nativeResponse?.success === true && Success({ messageApi });
    nativeResponse?.success === false && Error({ messageApi, messageError });
    nativeUpdateResponse?.success === false &&
      Error({ messageApi, messageErrorUpdate });
    dispatch(deleteNativeDeleteResponse());
    dispatch(deleteNativeUpdateResponse());
  }, [nativeResponse?.success, nativeUpdateResponse?.success]);

  useEffect(() => {
    form.setFieldsValue({
      nameEng: nativeLanguageData?.nameEng,
      name: nativeLanguageData?.name,
      image: nativeLanguageData?.imageFile?.path,
    });
  }, [nativeLanguageData]);

  useEffect(() => {
    dispatch(nativeLanguageGetIdThunk(nativeId));
  }, []);

  useEffect(() => {
    if (nativeResponse?.success === true || nativeUpdateBool === true) {
      navigate("/native-language");
    }
    dispatch(deleteNativeDeleteBool());
    dispatch(deleteNativeUpdateBool());
  }, [deleteBool, nativeUpdateBool]);

  const onTab = () => {
    dispatch(nativeLanguageDeleteThunk(nativeLanguageData?.id));
  };
  return (
    <div className="nativeLanguageScreenMainDiv">
      <CustomModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onTab={onTab}
      />
      <p className="nativeLanguageTitle">Update Native Language</p>

      <Form
        autoComplete="off"
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        className="formAntd"
      >
        <p>Language english name</p>
        <CustomAntdInput name="nameEng" placeholder=" Language English Name*" />
        <p>Native Name</p>
        <CustomAntdInput name="name" placeholder="Native Name*" />
        <p>Language Icon</p>
        <Form.Item
          name="image"
          rules={[
            {
              required: true,
            },
          ]}
        >
          {categoryShow != null || fileList != null ? (
            <div className="imgae_upload_design">
              <div className="remove_icon_div">
                <img
                  src={remove_icon}
                  onClick={() => {
                    setFileList(null);
                    setCategoryShow(null);
                  }}
                />
              </div>
              <div className="imgae_name">
                <p>{nativeLanguageData?.imageFile?.description}</p>
                <img src={`${baseUrl}${nativeLanguageData?.imageFile?.path}`} />
              </div>
            </div>
          ) : (
            <Upload
              onChange={handleChange}
              beforeUpload={beforeUpload}
              {...props}
              maxCount={1}
              listType="picture"
              className="upload-list-inline"
            >
              {categoryShow && showCategoryUpload ? null : (
                <img src={uploadIcon} className="upload" />
              )}
            </Upload>
          )}
        </Form.Item>

        <Form.Item>
          {contextHolder}
          <CustomAntdButton
            title="Update"
            background={Colors.PURPLE}
            loading={nativeUpdateLoading}
          />
          <div className="deleteButton">
            <CustomAntdButtonDelete
              loading={nativeDeleteLoading}
              title="Delete"
              background={Colors.GRAY_COLOR}
              onClick={() => {
                showModal();
              }}
            />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
