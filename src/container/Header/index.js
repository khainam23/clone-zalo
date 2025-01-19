import {
  faCommentDots,
  faAddressBook,
  faSquareCheck,
  faCloud,
  faBriefcase,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Image from "../../components/Image";
import { Tooltip } from "react-tooltip";

import styles from "./index.module.scss";
import TabItem from "../TabItem";

const cx = classNames.bind(styles);

function Header(props) {
  return (
    <div {...props} className={cx("container")}>
      {/* Head */}
      <header className={cx('header')}>
        <Image alt="Avatar" height={32} width={32} className={cx('avatar')}/>
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
