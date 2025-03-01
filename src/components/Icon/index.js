import { Tooltip } from "react-tooltip";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./index.module.scss";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function Icon({
  icon = faQuestion,
  description = "Not things",
  method,
  styles = {},
  isSelected = false,
  isShowDescription = true,
  ...props
}) {
  const boxId = `box-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <>
      <div
        id={boxId}
        onClick={method}
        className={cx("box", { selected: isSelected })}
        style={styles}
        {...props}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      {isShowDescription && (
        <Tooltip
          anchorSelect={`#${boxId}`}
          content={description}
          delayShow={500}
        />
      )}
    </>
  );
}

export default Icon;
