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
      style={{
        backgroundImage: `url(/crisis/assets/${giftColor}Gift.png)`,
      }}
      className={`
        z-100 absolute w-full h-full top-0 left-0 cursor-pointer bg-center bg-cover ${hidden ? "hidden" : ""}
      `}
    />
  );
}