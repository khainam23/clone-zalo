import classNames from "classnames/bind";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faPeopleGroup,
  faVideo,
  faMagnifyingGlass,
  faTableColumns,
  faIcons,
  faImage,
  faPaperclip,
  faAddressCard,
  faDisplay,
  faFont,
  faComment,
  faEllipsis,
  faFaceSmile,
  faThumbsUp,
  faBell,
  faGear,
  faUserGroup,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import test from "../../assets/images/test.png";

import Icon from "../Icon";
import Message from "../Message";

const cx = classNames.bind(style);

function ShowMsg(props) {
  return (
    <div {...props} className={cx("container")}>
      {/* Exchange */}
      <div className={cx("exchange")}>
        {/* Header */}
        <div className={cx("header")}>
          <div className={cx("wrapper")}>
            {/* Info */}
            <div className={cx("info")}>
              <img className={cx("image")} src={test} />
              <div className={cx("description")}>
                <span className={cx("text")}>Username</span>
                <div>
                  <FontAwesomeIcon icon={faTag} transform={{ rotate: 135 }} />
                </div>
              </div>
            </div>

            {/* Functional */}
            <div className={cx("functional")}>
              <Icon
                icon={faPeopleGroup}
                description="Thêm bạn vào trò chuyện"
              />
              <Icon icon={faVideo} description="Cuộc gọi video" />
              <Icon icon={faMagnifyingGlass} description="Tìm kiếm tin nhắn" />
              <Icon
                icon={faTableColumns}
                description="Thông tin hội thoại"
                isSelected
              />
            </div>
          </div>
        </div>

        {/* Chat */}
        <div className={cx("chat")}>
          {Array.from({ length: 50 }).map((_, index) => (
            <Message key={index} message={`${index + 1}`} isSender={index % 2 == 0 ? true : false} />
          ))}
        </div>

        {/* Input */}
        <div className={cx("input")}>
          {/* Header */}
          <div className={cx("header")}>
            <div
              style={{
                display: "flex",
                padding: "1px 0px 5px 15px",
              }}
            >
              <Icon
                styles={{ padding: "10px 8px", fontSize: "20px" }}
                icon={faIcons}
                description="Gửi sticker"
              />
              <Icon icon={faImage} description="Gửi hình ảnh" />
              <Icon icon={faPaperclip} description="Đính kèm file" />
              <Icon icon={faAddressCard} description="Gửi danh thiếp" />
              <Icon icon={faDisplay} description="Chụp kèm với của sổ Zalor" />
              <Icon icon={faFont} description="Định dạng tin nhắn" />
              <Icon icon={faComment} description="Chèn tin nhắn nhanh" />
              <Icon icon={faEllipsis} description="Tùy chọn thêm" />
            </div>
          </div>

          {/* Promt */}
          <div className={cx("promt")}>
            <input
              className={cx("enter")}
              type="text"
              placeholder="Nhập @, tin nhắn tới username"
            />
            <div
              style={{
                display: "flex",
                margin: "10px 5px",
              }}
            >
              <Icon icon={faFaceSmile} description="Biểu cảm" />
              <Icon
                icon={faThumbsUp}
                description="Gửi nhanh biểu tượng cảm xúc"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Option */}
      <div className={cx("option")}>
        {/* Title */}
        <div className={cx("title")}>
          <span>Thông tin cộng đồng</span>
        </div>

        {/* Info */}
        <div className={cx("info")}>
          {/* Image */}
          <div>
            <img
              src={test}
              style={{ borderRadius: "50%", width: "48px", height: "48px" }}
            />
          </div>

          <h1>Name</h1>

          {/* Fast option */}
          <div className={cx("fast-option")}>
            <BoxIcon icon={faBell} description="Tắt thông báo" />
            <BoxIcon icon={faPaperclip} description="Ghim hội thoại" />
            <BoxIcon icon={faUserGroup} description="Tạo nhóm trò chuyện" />
            {/* <BoxIcon icon={faUsersLine} description="Thêm thành viên" />
            <BoxIcon icon={faGear} description="Quản lý cộng đồng" /> */}
          </div>
        </div>

        <Line />

        {/* Info general */}
        <div className={cx("info-general")}>
          <div className={cx("item")}>
            <FontAwesomeIcon icon={faClock} />
            <span className={cx("text")}>Danh sách nhắc hạn</span>
          </div>
          <div className={cx("item")}>
            <FontAwesomeIcon icon={faUserGroup} />
            <span className={cx("text")}>x nhóm chung</span>
          </div>
        </div>

        <Line />

        {/* Store: Image, Video */}
        <div>Ảnh</div>

        <Line />

        {/* Store: File */}
        <div>File</div>

        {/* Store: Link */}
        <div>Link</div>

        {/* Security */}
        <div>Thiết lập bảo mật</div>

        {/* More */}
        <div></div>
      </div>
    </div>
  );
}

function BoxIcon({ icon = undefined, description = "Nothing" }) {
  return (
    <div className={cx("box-icon")}>
      <Icon
        icon={icon}
        styles={{
          padding: "10px",
          borderRadius: "50%",
          backgroundColor: "#e5e7eb",
        }}
      />
      <span style={{ textAlign: "center", marginTop: "5px" }}>
        {description}
      </span>
    </div>
  );
}

function Line() {
  return <div style={{ backgroundColor: "#ebecf0", padding: "5px 0" }}></div>;
}

export default ShowMsg;
