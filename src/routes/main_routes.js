import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "../screens";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
    </Routes>
  );
};
