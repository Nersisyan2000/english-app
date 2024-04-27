import headerLeftIcon from "../../assets/images/button.svg";
import bellIcon from "../../assets/images/bellIcon.svg";
import messageIcon from "../../assets/images/messageIcon.svg";
import membersIcon from "../../assets/images/membersIcon.svg";
import statisticIcon from "../../assets/images/statisticsIcon.svg";
import logOutIcon from "../../assets/images/logout-svgrepo-com.svg";
import { deleteReduxToken } from "../../store/slices/auth/login-slice";

import { Badge } from "antd";
import "./custom-header.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const CustomHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
    dispatch(deleteReduxToken());
  };

  return (
    <div className="customHeaderApp">
      <header className="appHeader">
        <div className="headerFirstPart">
          <img src={headerLeftIcon} className="headerIconFirst" alt="" />
          <p className="headertitle">English app</p>
        </div>
        <div className="headerSecondPart">
          <Badge count={1}>
            <img src={bellIcon} className="headerIcon" alt="" />
          </Badge>
          <img src={messageIcon} className="headerIcon" alt="" />
          <img src={membersIcon} className="headerIcon" alt="" />
          <img src={statisticIcon} className="headerIcon" alt="" />
          <img
            alt=""
            src={logOutIcon}
            className="headerIcon logOutIcon"
            onClick={() => {
              logOut();
            }}
          />
        </div>
      </header>
      <Outlet />
    </div>
  );
};
