import classNames from "classnames/bind";
import Image from "../Image";

import style from "./index.module.scss";

const cx = classNames.bind(style);

function Message({ message, isSender = true, isRead = false }) {
  return (
    <div className={cx("message", { receiver: !isSender })}>
      {!isSender && <Image height={38} width={38}/>}
      <div className={cx("wrapper")}>
        <div className={cx('username')}>{!isSender && "Username"}</div>
        <div></div>
        <div className={cx("text")}>{message}</div>
        <div className={cx("time")}>time</div>
      </div>
    </div>
  );
}

export default Message;
