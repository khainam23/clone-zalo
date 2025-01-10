import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";
import {
  faUserPlus,
  faMagnifyingGlass,
  faUserGroup,
  faEllipsis,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

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
              <div className={cx('filter')}>
                <span className={cx('text')}>Phân loại</span>
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
      <div></div>
    </div>
  );
}

function Icon({ icon, description, method, styles }) {
  const boxId = `box-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <>
      <div
        id={boxId}
        onClick={method || undefined}
        className={cx("box")}
        style={styles}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <Tooltip
        anchorSelect={`#${boxId}`}
        content={description}
        delayShow={500}
      />
    </>
  );
}

function Tab({ name, isSelected, props }) {
  return (
    <div {...props} className={cx("tab", isSelected && "selected")}>
      {name}
    </div>
  );
}

Icon.defaultProps = {
  icon: null,
  description: undefined,
  method: null,
};

export default Chat;
