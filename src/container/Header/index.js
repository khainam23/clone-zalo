import {
  faCommentDots,
  faAddressBook,
  faSquareCheck,
  faCloud,
  faBriefcase,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Image from "~/components/Image";

import styles from "./index.module.scss";
import Icon from "~/components/Icon";

const cx = classNames.bind(styles);

function Header(props) {
  return (
    <div {...props} className={cx("container")}>
      {/* Head */}
      <header className={cx("header")}>
        <Image alt="Avatar" height={32} width={32} className={cx("avatar")} />
        <div style={{ padding: "5px" }}></div>
        {itemHeader.map((item, index) => (
          <Icon
            key={index}
            className={cx("box")}
            icon={item.icon}
            description={item.description}
            isSelected={item.isSelected ?? false}
          />
        ))}
      </header>

      {/* Footer */}
      <footer className="footer">
        {itemFooter.map((item, index) => (
          <Icon
            key={index}
            className={cx("box")}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </footer>
    </div>
  );
}

const itemHeader = [
  {
    icon: faCommentDots,
    description: "Tin nhắn",
    isSelected: true,
  },
  {
    icon: faAddressBook,
    description: "Danh bạ",
  },
  {
    icon: faSquareCheck,
    description: "To-do",
  },
];

const itemFooter = [
  {
    icon: faCloud,
    description: "Cloud của tôi",
  },
  {
    icon: faBriefcase,
    description: "Công cụ",
  },
  {
    icon: faGear,
    description: "Cài đặt",
  },
];

export default Header;
