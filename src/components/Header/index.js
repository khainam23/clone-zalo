import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faAddressBook,
  faSquareCheck,
  faCloud,
  faBriefcase,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import test from "../../assets/images/test.png";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { Tooltip } from "react-tooltip";

const className = classNames.bind(styles);

function Header(props) {
  return (
    <div {...props} className={className("container")}>
      {/* Head */}
      <header className="header">
        <Box
          src={test}
          description="Avatar"
          style={{ margin: "0", paddingTop: "0" }}
        />
        <div style={{ padding: "5px" }}></div>
        <Box icon={faCommentDots} description="Tin nhắn" isSelected />
        <Box icon={faAddressBook} description="Danh bạ" />
        <Box icon={faSquareCheck} description="To-do" />
      </header>

      {/* Footer */}
      <footer className="footer">
        <Box icon={faCloud} description="Cloud của tôi" />
        <Box icon={faBriefcase} description="Công cụ" />
        <Box icon={faGear} description="Cài đặt" />
      </footer>
    </div>
  );
}

function Box({ src, icon, description, method, isSelected, ...props }) {
  const boxId = `box-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <>
      <div
        id={boxId}
        onClick={method || undefined}
        className={className("box", isSelected && "selected")}
        {...props}
      >
        {src ? (
          <img
            className={className("image")}
            src={src}
            alt={description || "Image"}
          />
        ) : (
          <FontAwesomeIcon icon={icon} />
        )}
      </div>
      <Tooltip anchorSelect={`#${boxId}`} content={description} delayShow={500} />
    </>
  );
}

// Default Props
Box.defaultProps = {
  src: undefined,
  icon: null,
  description: "",
  method: null,
};

export default Header;
