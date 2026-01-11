import { useEffect, useState } from "react";

export default function Lights() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev % 3) + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <img id="lights" src={`/crisis/assets/lights_${counter}.svg`} alt="Lights" className="absolute top-0 left-0 w-full block pointer-events-none select-none"/>;
}
