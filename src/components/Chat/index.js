import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faMagnifyingGlass,
  faUserGroup,
  faEllipsis,
  faCaretDown,
  faThumbTack,
  faBellSlash,
} from "@fortawesome/free-solid-svg-icons";
import test from "../../assets/images/test.png";

import Icon from '../Icon'

const cx = classNames.bind(styles);

function Chat(props) {
  return (
    <div {...props} className={cx("container")}>
      {/* Header */}
      <header className={cx("header")}>
        <div className={cx("wrapper")}>
          {/* Funtional general */}
          <div className={cx("general")}>
            {/* Search */}
            <div className={cx("input")}>
              <FontAwesomeIcon
                className={cx("manifying-glass")}
                icon={faMagnifyingGlass}
              />
              <input
                className={cx("search")}
                type="text"
                placeholder="Tìm kiếm"
              />
            </div>
            {/* Social */}
            <Icon icon={faUserPlus} description={"Thêm bạn"} />
            <Icon icon={faUserGroup} description={"Tạo nhóm chat"} />
          </div>

          {/* Functional for chat */}
          <div className={cx("functional")}>
            {/* Tabs */}
            <div className={cx("tabs")}>
              <Tab name={"Ưu tiên"} isSelected />
              <Tab name={"Khác"} />
            </div>

            {/* Method */}
            <div className={cx("method")}>
              {/* Filter */}
              <div className={cx("filter")}>
                <span className={cx("text")}>Phân loại</span>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>

              {/* More */}
              <div>
                <Icon
                  icon={faEllipsis}
                  styles={{ padding: "5px", borderRadius: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Body chat */}
      <div className={cx("chats")}>
      {Array.from({ length: 10 }, (_, i) => {
          return <CardChat key={i} title={`${i + 1}-username`} image={test} />;
        })}
      </div>
    </div>
  );
}

function Tab({ name = undefined, isSelected, props }) {
  return (
    <div {...props} className={cx("tab", isSelected && "selected")}>
      {name}
    </div>
  );
}

function CardChat({
  image = undefined,
  title = "Username",
  lastChat = "The last chat",
  time = "20:30",
  count = undefined,
  isPin = false,
  isMute = false,
  isSelected = false
}) {
  return (
    <div className={cx("card-chat", isPin && "pin", isSelected && "selected")}>
      <div className={cx("wrapper")}>
        <img className={cx("image")} src={image} alt={title} />
        <div className={cx("info")}>
          {/* Info general */}
          <div className={cx("top")}>
            {/* Title */}
            <span>{title}</span>

            <div>
              {isMute && (
                <FontAwesomeIcon
                  icon={faBellSlash}
                  style={{
                    color: "#ccc",
                    marginRight: "5px",
                    fontSize: "13px",
                  }}
                />
              )}
              {/* time */}
              <span className={cx("time")}>{time}</span>
            </div>
          </div>

          {/* Last chat and isPin */}
          <div className={cx("bottom")}>
            <span className={cx("text")}>{lastChat}</span>
            {isPin && (
              <div>
                {count && <span className={cx("number")}>{count}</span>}{" "}
                <FontAwesomeIcon
                  icon={faThumbTack}
                  transform={{ rotate: 45 }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
