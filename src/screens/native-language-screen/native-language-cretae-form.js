import React, { useEffect, useState } from "react";
import { Form, Upload,} from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { deleteNativeCreateBool, getNativeCreateBool, nativeLanguageCreateThunk } from "../../store/slices/native-language/native-language-create";
import uploadIcon from "../../assets/images/Group 1000014822.png";
import { CustomAntdButton } from "../../components/custom-antd-button/custom-antd-button";
import { Colors } from "../../assets/colors";
import { CutomAntdInput } from "./custom-antd-input";
import { useNavigate } from "react-router-dom";
export const NativeLanguageCretae = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formData = new FormData();
    const nativeCreateBool = useSelector(getNativeCreateBool);
    const [fileList, setFileList] = useState([]);
    const [show, setShow] = useState();
    const [showUpload, setShowUpload] = useState();


    const onFinish = (values) => {
        console.log(values,"values")
        if (values.image.file != "") {
            formData.append('nameEng', values.nameEng);
            formData.append('name', values.name);
            formData.append('image', show);
            setShow("")
            dispatch(nativeLanguageCreateThunk( formData ));
            form.resetFields();
        }
        else {
            console.log(values, "values")
        }
    };

        useEffect(()=>{
            if(nativeCreateBool === true){
            navigate("/native-language");
            }
            dispatch(deleteNativeCreateBool())
        },[nativeCreateBool])

    const handleChange = (info) => {
        console.log(info,"info")
        setShow(info.file)
        setShowUpload(info.fileList[0])
        if (!info.fileList[0]) {
            info.file = ""
        }
        // formData.append('image', info.fileList[0]);
    };


    const beforeUpload = () => {
        return false;
    };

    const props = {
        accept: ".png",
        onRemove: (file) => {
            console.log(file, "logg")
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
        },
    };

    return (
        <div className='nativeLanguageScreenMainDiv'>
            <p className='nativeLanguageTitle'>Add Native Language</p>
            <Form
                autoComplete="off"
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
            >

                <CutomAntdInput name="nameEng" placeholder=" Language English Name*"/>
                <CutomAntdInput name="name" placeholder="Native Name*"/>
                
              
                <Form.Item
                    name="image"
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
                        {showUpload ? null : <img src={uploadIcon} className="upload" />}
                    </Upload>
                </Form.Item>


                <Form.Item>
                <CustomAntdButton title="Add" background={Colors.PURPLE}/>

                </Form.Item>
            </Form>
        </div>
    )
}