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
} from "@fortawesome/free-solid-svg-icons";
import test from "../../assets/images/test.png";

import Icon from "../Icon";

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
              <Icon icon={faTableColumns} description="Thông tin hội thoại" />
            </div>
          </div>
        </div>

        {/* Chat */}
        <div className={cx("chat")}></div>

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
            <div style={{
              display: 'flex',
              margin: '10px 5px'
            }}>
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
        <div></div>

        {/* Info */}
        <div></div>

        {/* Option */}
        <div></div>

        {/* Store: Image, Video */}
        <div></div>

        {/* Store: File */}
        <div></div>

        {/* Store: Link */}
        <div></div>

        {/* More */}
        <div></div>
      </div>
    </div>
  );
}

export default ShowMsg;
