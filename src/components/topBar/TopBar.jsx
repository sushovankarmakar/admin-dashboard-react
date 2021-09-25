import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          {/* <span className="logo">Admin</span> */}
          <img
            src="https://i.ibb.co/82SZkQt/logo-admin-1.png"
            alt="admin"
            className="adminAvatar"
          />
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="profile"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
