import { BsCheck, BsX } from "react-icons/bs";

import "./TodoIcon.css";

const iconType = {
  check: (color) => <BsCheck className="Icon" fill={color} />,
  delete: (color) => <BsX className="Icon" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconType[type](color)}
    </span>
  );
}

export { TodoIcon };
