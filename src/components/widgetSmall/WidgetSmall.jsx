import { Visibility } from "@material-ui/icons";
import "./widgetSmall.css";

const WidgetSmall = () => {
  const users = [
    {
      userName: "Anna Keller",
      title: "Software Enginner",
      img: "https://i.ibb.co/gVQB8Wd/user-1.jpg",
    },
    {
      userName: "Frank Lampard",
      title: "Civil Enginner",
      img: "https://i.ibb.co/gVQB8Wd/user-1.jpg",
    },
    {
      userName: "Jonny Shelby",
      title: "Laywer",
      img: "https://i.ibb.co/gVQB8Wd/user-1.jpg",
    },
    {
      userName: "August Cook",
      title: "Teacher",
      img: "https://i.ibb.co/gVQB8Wd/user-1.jpg",
    },
    {
      userName: "Marie Bess",
      title: "Cook",
      img: "https://i.ibb.co/gVQB8Wd/user-1.jpg",
    },
  ];

  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Members</span>
      <ul className="widgetSmallList">
        {users.map((user) => {
          return (
            <li className="widgetSmallListItem">
              <img src={user.img} alt="" className="widgetSmallImg" />
              <div className="widgetSmallUser">
                <span className="widgetSmallUsername">{user.userName}</span>
                <span className="widgetSmallUserTitle">{user.title}</span>
              </div>
              <button className="widgetSmallButton">
                <Visibility className="widgetSmallIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSmall;
