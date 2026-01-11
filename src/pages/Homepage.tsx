import { useNavigate } from "react-router-dom";
import DefaultButton from "../components/DefaultButtons";
import RoundButton from "../components/RoundButton";
import Snow from "../components/Snow";
import { ListRestart } from "lucide-react";
import Difficulty from "../components/Difficulty";
import { useState } from "react";

const STORAGE_KEY = "usedQuestions";

export default function Homepage() {
    const navigate = useNavigate();

    const nav = (path?: string) => {
        navigate(`/${path}`);
    };

    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [open, setOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setPos({ x: e.clientX, y: e.clientY });
        setOpen(true);
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-slate-100 to-cyan-200">
            
            <Snow />


            {/* wrapper */}
            <div className="mx-auto max-w-7xl flex flex-col items-center justify-center min-h-screen">
            <div className="absolute top-6 pl-4 w-full"><RoundButton icon={ListRestart} iconSize={32} onClick={() => {localStorage.removeItem(STORAGE_KEY);}} /></div>
            <div className="relative top-[-120px]">
                <div className="textGradient mb-12">Language Quest</div> {/* header */}
                <div className="flex flex-row gap-8 w-full justify-center"> {/* buttons */}
                    <div className="relative">
                        <DefaultButton text="Quiz" onClick={handleClick} />
                        <img src="/crisis/assets/snowButton.png" alt="snowButton" className="absolute -top-2 w-[300px] block pointer-events-none select-none" />
                    </div>
                    

                    <Difficulty
                        x={pos.x}
                        y={pos.y}
                        open={open}
                        onClose={() => setOpen(false)}
                    />
                    <div className="relative">
                        <DefaultButton text="Name That Tune" onClick={() => nav("Tune")} />
                        <img src="/crisis/assets/snowButton.png" alt="snowButton" className="absolute -top-2 w-[300px] block pointer-events-none select-none" />
                    </div>
                    
                </div>
            </div>
            <img src="/crisis/assets/snow.svg" alt="snow" className="absolute bottom-0 left-0 w-full block pointer-events-none select-none" />
            </div>

        </div>
    );
}
