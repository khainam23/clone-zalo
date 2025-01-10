import classNames from "classnames/bind";
import style from "./index.module.scss";

const cx = classNames.bind(style);

function ShowMsg(props) {
    return (
        <div {...props} className={cx('container')}>show</div>
    );
}

export default ShowMsg;