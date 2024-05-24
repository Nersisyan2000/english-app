import React, { useEffect } from "react";
import { Colors } from "../../assets/colors/colors";
import "../../global-styles/index";
import { CustomAddNew, CustomPagination, CustomSelect, CustomTable, MyCustomTable } from "../../components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserGetAllData, userGetAllThunk } from "../../store/slices";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { ResponsiveTable } from "responsive-table-react";

export const UserScreen = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userData = useSelector(getUserGetAllData)?.data;
  const dataList = userData?.list
  console.log(dataList,"liff")
  const data = {
    skip: 0,
    limit: 5,
  };
  useEffect(() => {
    dispatch(userGetAllThunk(data))
  }, [])

  const columns = [
    {
      "id": "_id",
      "text": "Id"
    },
    {
      "text": "User",
      "id": "firstName",
      key: "firstName",
    },
    {
      "text": "Email",
      "id": "email",
      key: "email",
    },
    {
      "text": "Phone",
      "id": "phoneNumber",
      key: "phoneNumber",
    },
    {
      "text": "Device ID",
      "id": "phoneNumber",
      key: "devices",
    },
    {
      "text": "Status",
      "id": "phoneNumber",
      key: "devices",
    },
  ]

  const dataTable = [
    {
      "name": "Mark",
      "surname": "Garsin"
    },
    {
      "name": "Gabriel",
      "surname": "Betappi"
    },
    {
      "name": "Gustav",
      "surname": "Mahler",
    }
  ]
  return (
    <div
      className="nativeLanguageScreenMainDiv"
      style={{ backgroundColor: Colors.WHITE }}
    >
      <div>
        <CustomAddNew
          title={"Add New User"}
          onClick={() => {
            navigate("/user-create");
          }}
        />
        <p className="screensTitleStyle">{t("USER")}</p>
        <div className="select-row">
          <CustomSelect title={t("SUBSCRIPTION")} />
         <div className="select_middle">
         <CustomSelect title={t("VERIFED_BY_PHONE")} />
         </div>
          <CustomSelect title={t("VERIFED_BY_EMAIL")} />
        </div>
        <ResponsiveTable columns={columns} data={dataList != null ?dataList :dataTable } />
        {/* <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>User</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
          <Th>Device ID</Th>
          <Th>Country</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {userData?.list?.map((item,index)=>{
          console.log(item,"log item")
          return(
            <Tr>
              <Td>{index+1}</Td>
              <Td>{item?.firstName}</Td>
              <Td>{item?.email}</Td>
              <Td>{item?.phoneNumber}</Td>
              <Td>{item?.devices?.length}</Td>
              <Td>{item?.lastName}</Td>
              <Td>{item?.phoneNumber}</Td>
        </Tr>
          )
        })}
       
        
      </Tbody>
    </Table> */}

        {/* <CustomTable tableData={userData?.list} /> */}
      </div>
      <div className="nativeScreenPaginationDiv">
          <CustomPagination length={userData?.total}/>
        </div>
    </div>
  );
};
