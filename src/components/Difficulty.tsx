import { useNavigate } from "react-router-dom";


type DifficultyProps = {
  x: number;
  y: number;
  open: boolean;
  onClose: () => void;
};

export default function Difficulty({
        x,
        y,
        open,
        onClose,
    }: DifficultyProps) {

    if (!open) return null;

    const navigate = useNavigate();

    const selectDifficulty = (difficulty: "easy" | "hard") => {
        navigate(`/Quiz`, { state: { difficulty } });
    };

    return (
        <>
            {/* overlay */}
            <div
            className="fixed inset-0 z-40"
            onClick={onClose}
            />

            <div
            className="fixed z-50 min-w-[250px] rounded-2xl bg-slate-100 text-zinc-800 shadow-xl p-3"
            style={{
                left: x,
                top: y,
                transform: "translate(8px, 8px)",
            }}
            >
            <p className="text-2xl">Select difficulty</p>
            <div className="*:m-2 *:w-32 *:h-16 *:rounded-lg text-xl *:shadow-xl">
                <button className="bg-green-400 hover:bg-green-500" onClick={() => selectDifficulty("easy")}>Easy</button>
                <button className="bg-red-400 hover:bg-red-500" onClick={() => selectDifficulty("hard")}>Hard</button>
            </div>

            </div>
        </>
    );
}
