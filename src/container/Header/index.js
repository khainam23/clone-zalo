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

import styles from "./index.module.scss";
import Icon from "../../components/Icon";

const cx = classNames.bind(styles);

function Header(props) {
  return (
    <div {...props} className={cx("container")}>
      {/* Head */}
      <header className={cx("header")}>
        <Image alt="Avatar" height={32} width={32} className={cx("avatar")} />
        <div style={{ padding: "5px" }}></div>
        <Icon className={cx('box')} icon={faCommentDots} description="Tin nhắn" isSelected />
        <Icon className={cx('box')} icon={faAddressBook} description="Danh bạ" />
        <Icon className={cx('box')} icon={faSquareCheck} description="To-do" />
      </header>

      {/* Footer */}
      <footer className="footer">
        <Icon className={cx('box')} icon={faCloud} description="Cloud của tôi" />
        <Icon className={cx('box')} icon={faBriefcase} description="Công cụ" />
        <Icon className={cx('box')} icon={faGear} description="Cài đặt" />
      </footer>
    </div>
  );
}

export default Header;
