import "./styles.css";
import BellIcon from "../../assets/images/bell_icon.svg";
import { memo, useEffect, useState } from "react";

interface IBellNotitication {
  countNotification: number;
}

const BellNotification: React.FC<IBellNotitication> = ({
  countNotification,
}: IBellNotitication) => {
  const [animateBell, setAnimateBell] = useState(false);
  const [count, setCount] = useState(countNotification);

  const triggerAnimationBell = () => {
    setAnimateBell(!animateBell);
    setCount(countNotification);
  };

  useEffect(() => {
    triggerAnimationBell();
  }, [countNotification]);

  return (
    <div
      onAnimationEnd={triggerAnimationBell}
      className={`icon-wrapper ${animateBell ? "animateClass" : ""}`}
      data-number={count || 0}
    >
      <img src={BellIcon} alt="bell-notification" className="bell-icon" />
    </div>
  );
};

BellNotification.defaultProps = {
  countNotification: 0,
};

export default memo(BellNotification);
