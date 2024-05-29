import { useEffect, useState } from "react";
import { deleteUserDeleteResponse, deleteUserUpdateResponse, getUserDeleteData, getUserDeleteLoading, getUserGetByIdData, getUserUpdateData, getUserUpdateLoading, getUserUpdateMessages, userDeleteThunk, userGetByIdThunk, userUpdateThunk } from "../../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { CustomAntdButton, CustomAntdButtonDelete, CustomAntdInput, CustomAntdSelect, Error, Success } from "../../components";
import { DatePicker, Form, Space, message } from "antd";
import { Colors } from "../../assets/colors";
import CsutomSwitch from "../../components/custom-switch/custom-switch";
import delteIcon from "../../assets/images/delteIcon.png"
import { TableColumn } from "../../data/custom-table-columns";
import CustomModal from "../../components/custom-modal/custom-modal";

export const UserScreenUpdate = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formData = new FormData();
    const [select1 ,setSelect1] = useState(false);
    const [select2 ,setSelect2] = useState(false);
    const [select3 ,setSelect3] = useState(false);
    const [select4 ,setSelect4] = useState(false);
    const [calendar,setCalendar] = useState();
    console.log(calendar,"log cale")


    dayjs.extend(customParseFormat);
    const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
    const { RangePicker } = DatePicker;

    const dateFormat = 'YYYY/MM/DD';
    const [selected, setSelected] = useState();
    const [messageApi, contextHolder] = message.useMessage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userId = localStorage.getItem("userId");
    const userIdData = useSelector(getUserGetByIdData);
    const messageError = useSelector(getUserUpdateMessages);
    const userUpdateResponse = useSelector(getUserUpdateData)
    const userUpdateLoading = useSelector(getUserUpdateLoading);
    const userDeleteLoading = useSelector(getUserDeleteLoading);
    const userDeleteResponse = useSelector(getUserDeleteData);
    console.log(userDeleteResponse,"response delete")
    const userList = userIdData?.data
    console.log(userUpdateResponse,"log user dtaa")

    const showModal = () => {
        setIsModalOpen(true);
    };
    const onChange = (date, dateString) => {
        setCalendar(date?.format(dateFormat))
        console.log(date?.format(dateFormat),"date");
      };
      const onTab = () => {
        dispatch(userDeleteThunk(userList?.id,));
      };

    const onFinish = (values) => {
        console.log(values, "values");
        const data = {
            ...values,
            id:userList?.id,
            phoneNumberVerified:select1,
            emailVerified:select2,
            deleted:select3,
            isSubscribed:select4,
            subscriptionExpiresDt:calendar,
        }
            dispatch(userUpdateThunk(data))
    };

    useEffect(() => {
        form.setFieldsValue({
          firstName: userList?.firstName,
          email: userList?.email,
          password: userList?.password,
          phoneNumber: userList?.phoneNumber,
          lastName: userList?.lastName,
          role: userList?.role,
        });
      }, [userList]);

    useEffect(() => {
        dispatch(userGetByIdThunk(userId));
    }, []);

    useEffect(()=>{
        if( userUpdateResponse?.success === true || userDeleteResponse?.success === true){
            navigate("/user")
        }
        dispatch(deleteUserUpdateResponse());
        dispatch(deleteUserDeleteResponse());
    },[ userUpdateResponse?.success, userDeleteResponse?.success ])

    useEffect(() => {
        userUpdateResponse?.success === true && Success({ messageApi });
        userUpdateResponse?.success === false && Error({ messageApi, messageError });
        dispatch(deleteUserUpdateResponse())
      }, [userUpdateResponse?.success,]);

    return (
        <div className="nativeLanguageScreenMainDiv">
              <CustomModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onTab={onTab}
      />
            <Form
                autoComplete="off"
                form={form}
                name="category_create"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
            >
                <div className="useUpdateDivRow">

                    <div className="formColumn">
                        <div className="userHeader">
                            <p className="nativeLanguageTitle">Update User</p>
                            <div className="deleteDiv">
                                <p className="deleteTitle">
                                    Delete Block

                                </p>
                                <img className="delteIcon" src={delteIcon} alt="delet_icon" />
                            </div>
                        </div>
                        <div className="row borderBottom">
                            <div className="row">
                                <p className="inputTitle">Device ID:</p>
                                <p className="ietmColor">5555</p>
                            </div>
                            <div className="row idLeft">
                                <p className="inputTitle">ID:</p>
                                <p className="ietmColor">455555</p>
                            </div>
                        </div>
                            <div className="row borderBottom">
                                <p className="inputTitle">Religion:</p>
                                <p className="ietmColor">54444</p>
                                <img alt="region_img" />
                            </div>
                        <div className="category_row_input_user">
                            <div>
                                <p className="inputTitle">Fisrt Name</p>
                                <CustomAntdInput
                                    name="firstName"
                                    placeholder=" First Name*"
                                    type="text"
                                    min={3}
                                />
                            </div>
                            <div className="left">
                                <div>
                                    <p className="inputTitle">Last Name</p>
                                    <CustomAntdInput
                                        name="lastName"
                                        placeholder="Last Name*"
                                        type="text"
                                        min={3}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="category_row_input_user">
                            <div>
                                <p className="inputTitle">Phone Number</p>
                                <CustomAntdInput
                                    name="phoneNumber"
                                    placeholder=" First Name*"
                                    type="text"
                                    min={3}
                                />
                            </div>
                            <div className="left switchDiv">
                                <p className="switchTitle"> Verified</p>
                                <CsutomSwitch  check={select1} setCheck={setSelect1} color={Colors.GREEN} />
                            </div>
                        </div>
                        <div className="category_row_input_user">
                            <div>
                                <p className="inputTitle">Email</p>
                                <CustomAntdInput
                                    name="email"
                                    placeholder=" First Name*"
                                    type="text"
                                    min={3}
                                />
                            </div>
                            <div className="left switchDiv">
                                <p className="switchTitle"> Verified</p>
                                <CsutomSwitch  check={select2} setCheck={setSelect2} color={Colors.GREEN} />
                            </div>
                        </div>
                        <div>
                            <p className="inputTitle">Password</p>
                            <CustomAntdInput name="password" placeholder=" Language English Name*" />
                        </div>
                        <div>
                            <p className="inputTitle">Role</p>
                           <CustomAntdSelect
                                name="role"
                                width={"420px"}
                                optinData={TableColumn}
                                setSelected={setSelected}
                                selected={selected}
                                defaultValue="Role"
                            />
                        </div>
                        <div className="blockUserDiv">
                            <p className="deleteTitle">
                                Block User
                            </p>
                            <CsutomSwitch check={select3} setCheck={setSelect3}  color={Colors.RED} />
                        </div>
                        <Form.Item>
                            {contextHolder}
                            <CustomAntdButton
                                title="Update"
                                background={Colors.PURPLE}
                                loading={userUpdateLoading}
                            />
                            <div className="deleteButton">
                                <CustomAntdButtonDelete
                                      loading={userDeleteLoading}
                                    title="Delete"
                                    background={Colors.GRAY_COLOR}
                                    onClick={() => {
                                        showModal();
                                    }}
                                />
                            </div>
                        </Form.Item>
                    </div>
                    <div className="subscribed">
                        <p className="nativeLanguageTitle">Subscriptipon</p>
                        <div className="switchDiv">
                            <p className="switchTitle">
                                Subscribed
                            </p>
                            <CsutomSwitch check={select4} setCheck={setSelect4} color={Colors.PURPLE} />
                        </div>
                        <div>
                            <p className="subscriptionTitle">
                                Subscription Date
                            </p>
                            <Space direction="vertical" size={12}>
                                <DatePicker onChange={onChange} className="dataPicker" defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
                            </Space>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )
}