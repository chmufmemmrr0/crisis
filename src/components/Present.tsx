import { useMemo, useState } from "react";

type PresentProps = {
  songId: number | string;
};

export default function Present({ songId }: PresentProps) {
  const [hidden, setHidden] = useState(false);

  // losowanie koloru tylko raz przy mount
  const giftColor = useMemo<"yellow" | "green" | "blue">(() => {
    const rand = Math.floor(Math.random() * 3);
    if (rand === 2) return "yellow";
    return rand ? "green" : "blue";
  }, []);

  return (
    <div
      id={`present${songId}`}
      onClick={() => setHidden(true)}
      className={`
        w-32 h-32 cursor-pointer
        bg-center bg-no-repeat bg-contain
        ${hidden ? "hidden" : ""}
        bg-[url(/crisis/assets/${giftColor}Gift.png)]
      `}
    />
  );
}