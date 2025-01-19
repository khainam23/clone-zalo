import Chat from "../Chat";
import ShowMsg from "../ShowMsg";
import classNames from "classnames/bind";
import style from "./index.module.scss";

const cx = classNames.bind(style);

function Content(props) {
  return (
    <div {...props} className={cx("container")}>
      <Chat className={cx('chat')}></Chat>
      <ShowMsg className={cx('show-msg')}></ShowMsg>
    </div>
  );
}

export default Content;
