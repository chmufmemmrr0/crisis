import { useState, type MouseEvent } from "react";
import { type LucideIcon } from "lucide-react";

interface RoundButtonProps {
  icon: LucideIcon;      // icon
  iconSize?: number;         // icon size
  size?: number;             // button size

  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function RoundButton({
  icon: Icon,
  iconSize = 16,
  onClick,
}: RoundButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      type="button"
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={onClick}
      className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500 shadow-md focus:outline-none active:shadow-inner transition-all duration-150`}
    >
      <span
        className={`absolute w-16 h-16 rounded-full bg-cyan-300 transform transition-all duration-150 ${
          pressed ? "translate-y-0" : "-translate-y-2"
        }`}
      />

      <Icon
        size={iconSize}
        className={`relative z-10 text-cyan-700 transition-transform duration-150 ${
          pressed ? "translate-y-0" : "-translate-y-2"
        }`}
      />
    </button>
  );
}
