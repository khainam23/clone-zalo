import {
  faCommentDots,
  faAddressBook,
  faSquareCheck,
  faCloud,
  faBriefcase,
  faGear,
} from "@fortawesome/free-solid-svg-icons";``
import test from "../../assets/images/test.png";
import classNames from "classnames/bind";

import styles from "./index.module.scss";
import TabItem from "../TabItem";

const cx = classNames.bind(styles);

function Header(props) {
  return (
    <div {...props} className={cx("container")}>
      {/* Head */}
      <header className="header">
        <TabItem
          src={test}
          description="Avatar"
          style={{ margin: "0", paddingTop: "0" }}
        />
        <div style={{ padding: "5px" }}></div>
        <TabItem icon={faCommentDots} description="Tin nhắn" isSelected />
        <TabItem icon={faAddressBook} description="Danh bạ" />
        <TabItem icon={faSquareCheck} description="To-do" />
      </header>

      {/* Footer */}
      <footer className="footer">
        <TabItem icon={faCloud} description="Cloud của tôi" />
        <TabItem icon={faBriefcase} description="Công cụ" />
        <TabItem icon={faGear} description="Cài đặt" />
      </footer>
    </div>
  );
}

export default Header;
