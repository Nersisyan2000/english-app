import React from "react";
import { Colors } from "../../assets/colors/colors";
import "../../global-styles/index";
import { CustomAddNew, CustomSelect, MyCustomTable } from "../../components";
import { useTranslation } from "react-i18next";

export const UserScreen = () => {
  const { t } = useTranslation();

  return (
    <div
      className="authScreenMainDiv"
      style={{ backgroundColor: Colors.WHITE }}
    >
      <div>
        <CustomAddNew title={"Add New User"} />
        <p className="screensTitleStyle">{t("USER")}</p>
        <div className="select-row">
          <CustomSelect title={t("SUBSCRIPTION")} />
          <CustomSelect title={t("VERIFED_BY_PHONE")} />
          <CustomSelect title={t("VERIFED_BY_EMAIL")} />
        </div>
        <MyCustomTable />
      </div>
    </div>
  );
};
