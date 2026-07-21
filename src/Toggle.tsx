import { useState, type ReactNode } from "react";
import DownArrowSvg from "./assets/Arrow--down.svg?react";

type ToggleType = {
  title: string;
  children: ReactNode
}

const Toggle = ({title, children}: ToggleType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          {title}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)} aria-label="change toggle">
          <DownArrowSvg className={isOpen ? "rotate-180" : ""} />
        </button>
      </div>

      {isOpen &&
        <div>
          {children}
        </div>
      }
    </div>
  )

}

export default Toggle;