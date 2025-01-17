import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

function TabItem({
  src = undefined,
  icon = undefined,
  description = "Not things",
  method = undefined,
  isSelected = false,
}) {
  const boxId = `box-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <>
      <div
        id={boxId}
        onClick={method || undefined}
        className={cx("box", isSelected && "selected")}
      >
        {src ? (
          <img className={cx("image")} src={src} alt={description || "Image"} />
        ) : (
          <FontAwesomeIcon icon={icon} />
        )}
      </div>
      <Tooltip
        anchorSelect={`#${boxId}`}
        content={description}
        delayShow={500}
      />
    </>
  );
}

export default TabItem;
