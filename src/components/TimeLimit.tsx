import { useEffect, useState } from "react";

type timeLimitProps = {
    timeLimitSeconds: number;
}

export default function TimeLimit({timeLimitSeconds} : timeLimitProps){
    const [counter, setCounter] = useState(timeLimitSeconds)

    useEffect(() => {
        const interval = setInterval(() => {
          setCounter(--timeLimitSeconds);
          if(timeLimitSeconds <= 0) clearInterval(interval)
        }, 1000);

        return () => clearInterval(interval);
      }, []);

    return(
        <>
            <div className="w-60 h-20 text-5xl font-semibold text-cyan-700 rounded-full bg-cyan-300 flex justify-center items-center absolute -top-28">
                00:{counter < 10 ? "0" : ""}{counter}
            </div>
        </>
    )
}