import { Tooltip } from "react-tooltip";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './index.module.scss'

const cx = classNames.bind(style);

function Icon({
    icon = undefined,
    description = "Not things",
    method = undefined,
    styles = {},
    isSelected = false
  }) {
    const boxId = `box-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <>
        <div
          id={boxId}
          onClick={method || undefined}
          className={cx("box", isSelected && 'selected')}
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

export default Icon;