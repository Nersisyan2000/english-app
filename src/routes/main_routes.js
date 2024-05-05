import { Routes, Route } from "react-router-dom";
import { 
  CategoryScreen, 
  HomeScreen, 
  LearningLanguageScreen, 
  LoginScreen, 
  ResetPasswordEmail, 
  ResetSendPasswordScreen
} from "../screens";
import { StatisticsScreen } from "../components";
import { getLoginData } from "../store/slices/auth/login-slice";
import { useSelector } from "react-redux";
import { CustomHeader } from "../components/custom-header/custom-header";
import { CustomSidebar } from "../components/custom-sidebar/custom-sidebar";
import { DashboardScreen } from "../screens/dashboard-screen/dashboard-screen";
import { NativeLanguageScreen } from "../screens/native-language-screen/native-language-screen";

export const MyRoutes = () => {
  const token = localStorage.getItem("token");
  const loginData = useSelector(getLoginData);

  return (
    <>
      {!token && !loginData?.token ? (
        <Routes>
          <Route path="/" element={<ResetSendPasswordScreen />} />
          <Route path="/sendEmail" element={<ResetSendPasswordScreen />}/>
        </Routes>
      ) : (
        <Routes>
          <Route element={<CustomHeader />}>
            <Route path="/" element={<HomeScreen />} />
            <Route element={<CustomSidebar />}>
              <Route path="/dashboard" element={<DashboardScreen />} />
              <Route path="/statistics" element={<StatisticsScreen />} />
              <Route path="/native-language" element={<NativeLanguageScreen />} />
              <Route path="/learning-language" element={<LearningLanguageScreen />} />
              <Route path="/category" element={<CategoryScreen />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};
