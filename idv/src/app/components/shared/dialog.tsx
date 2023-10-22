import cn from "classnames";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  children: React.ReactNode;
  open: boolean;
  disableClickOutside?: boolean;
  onClose(): void;
};

const Dialog = ({ children, open, disableClickOutside, onClose }: Props) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    if (!disableClickOutside) {
      onClose();
    }
  });

  const modalClass = cn({
    "modal modal-bottom sm:modal-middle": true,
    "modal-open": open,
  });

  return (
    <div className={modalClass}>
      <div className="modal-box">{children}</div>
    </div>
  );
};

export default Dialog;
