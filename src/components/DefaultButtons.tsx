import { useState, type MouseEvent } from "react";

interface DefaultButtonProps {
  text: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  sizeMulti?: number;
}

export default function DefaultButton({
  text,
  onClick,
  sizeMulti = 1,
}: DefaultButtonProps) {
  const [pressed, setPressed] = useState(false);

  // bazowe wymiary i font
  const baseWidth = 300;
  const baseHeight = 100;
  const baseFontSize = 32;

  const width = baseWidth * sizeMulti;
  const height = baseHeight * sizeMulti;
  const fontSize = baseFontSize * sizeMulti;

  return (
    <button
      type="button"
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={onClick}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      className="relative flex items-center justify-center rounded-full bg-cyan-500 shadow-md focus:outline-none active:shadow-inner transition-all duration-150"
    >
      {/* tło kliknięcia */}
      <span
        style={{ width: `${width}px`, height: `${height}px` }}
        className={`absolute rounded-full bg-cyan-300 transform transition-all duration-150 ${
          pressed ? "translate-y-0" : "-translate-y-2"
        }`}
      />

      {/* tekst */}
      <p
        style={{ fontSize: `${fontSize}px` }}
        className={`relative z-10 text-cyan-700 font-bold transition-transform duration-150 ${
          pressed ? "translate-y-0" : "-translate-y-2"
        }`}
      >
        {text}
      </p>
    </button>
  );
}
