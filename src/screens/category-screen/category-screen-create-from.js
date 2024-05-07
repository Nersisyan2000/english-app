import React, { useEffect, useState } from "react";
import { Form, Upload, } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getNativeCreateBool } from "../../store/slices/native-language/native-language-create";
import uploadIcon from "../../assets/images/Group 1000014822.png";
import { CustomAntdButton } from "../../components/custom-antd-button/custom-antd-button";
import { Colors } from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import { CutomAntdInput } from "../../components";
import { categoryCreateThunk } from "../../store/slices/category/category-create";


export const CategoryCretae = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formData = new FormData();
    const nativeCreateBool = useSelector(getNativeCreateBool);
    const [categoryFileList, setCategoryFileList] = useState([]);
    const [categoryShow, setCategoryShow] = useState();
    const [showCategoryUpload, setCatgeoryShowUpload] = useState();


    const onFinish = (values) => {
        console.log(values, "values")
        if (values.category_image.file != "") {
            formData.append('name', values.category_name);
            formData.append('localization', values.category_string);
            formData.append('image', categoryShow);
            console.log(categoryShow, "logg")
            dispatch(categoryCreateThunk(formData));
            form.resetFields();
            setCategoryShow("")
        }
        else {
            console.log(values, "values")
        }
    };

    // useEffect(()=>{
    //     if(nativeCreateBool === true){
    //     navigate("/native-language");
    //     }
    //     dispatch(deleteNativeCreateBool())
    // },[nativeCreateBool])

    const handleChange = (info) => {
        console.log(info, "info")
        setCategoryShow(info.file)
        setCatgeoryShowUpload(info.fileList[0])
        if (!info.fileList[0]) {
            info.file = ""
        }
    };


    const beforeUpload = () => {
        return false;
    };

    const props = {
        accept: ".png",
        onRemove: (file) => {
            console.log(file, "logg")
            const index = categoryFileList.indexOf(file);
            const newFileList = categoryFileList.slice();
            newFileList.splice(index, 1);
        },
    };

    return (
        <div className='categoryScreenMainDiv'>
            <p className='nativeLanguageTitle'>Add Category</p>
            <Form
                autoComplete="off"
                form={form}
                name="category_create"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
            >
                <div className="category_row_input">
                    <CutomAntdInput name="category_name" placeholder="Category Name*" />
                    <CutomAntdInput name="category_string" placeholder="localication string*" />
                </div>


                <Form.Item
                    name="category_image"
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
                        {categoryShow && showCategoryUpload ? null : <img src={uploadIcon} className="upload" />}
                    </Upload>
                </Form.Item>


                <Form.Item>
                    <CustomAntdButton title="Add" background={Colors.PURPLE} />
                </Form.Item>
            </Form>
        </div>
    )
}