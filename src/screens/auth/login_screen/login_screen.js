import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import "../../../global-styles";
import "./login_style.css";
import { useTranslation } from "react-i18next";
import { CustomInputField, CustomButton } from "../../../components";
import { Colors } from "../../../assets/colors";
import { loginThunk } from "../../../store/slices/auth/login-slice";
import { loginValidatoinSchema } from "../../../validations/login-validations";

export const LoginScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div
      className="loginScreenMainDiv"
      style={{ backgroundColor: Colors.WHITE }}
    >
      <p className="titleStyle">{t("LOGIN_TO_YOUR_ACCOUNT")}</p>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          dispatch(loginThunk(values));
        }}
        validationSchema={loginValidatoinSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <CustomInputField
              type="text"
              name="username"
              label={t("EMAIL")}
              placeholder={t("EMAIL_PLACEHOLDER")}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <p style={{color:Colors.PURPLE}}>{errors.username && touched.username && errors.username}</p>
            <CustomInputField
              type="password"
              name="password"
              isForgot={true}
              label={t("PASSWORD")}
              placeholder={t("ENTER_YOUR_PASSWORD")}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <CustomButton />
          </form>
        )}
      </Formik>
    </div>
  );
};
