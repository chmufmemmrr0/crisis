// pages/Quiz.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { questions, type Question, type Difficulty } from "../data/Questions";
import DefaultButtons from "../components/DefaultButtons";
import Snow from "../components/Snow";
import { Home } from "lucide-react";
import RoundButton from "../components/RoundButton";

const STORAGE_KEY = "usedQuestions";

export default function QuizPage() {
  const navigate = useNavigate();

  const goBack = () => {
      navigate(`/`);
  };

  const { state } = useLocation();
  const difficulty: Difficulty = state?.difficulty ?? "easy";

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [allUsed, setAllUsed] = useState(false);

  // funkcja pobiera użyte pytania z localStorage
  const getUsedQuestions = (): string[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  };

  // zapisuje ID pytania do localStorage
  const markUsed = (q: Question) => {
    const used = getUsedQuestions();
    if (!used.includes(q.text)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...used, q.text]));
    }
  };

  // reset użytych pytań
  const resetUsedQuestions = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAllUsed(false);
    setCurrentQuestion(null);
  };

  useEffect(() => {
    const used = getUsedQuestions();

    // filtrowanie po difficulty i nieużyte
    const available = questions.filter(
      (q) => q.difficulty === difficulty && !used.includes(q.text)
    );

    if (available.length === 0) {
      setAllUsed(true);
      setCurrentQuestion(null);
      return;
    }

    // losowanie pytania
    const random = available[Math.floor(Math.random() * available.length)];
    setCurrentQuestion(random);
  }, [difficulty]);

  if (allUsed)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <p className="text-xl mb-4">All of the questions were used!</p>
        <button
          onClick={() => { resetUsedQuestions(); goBack(); }}
          className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
        >
          Reset questions
        </button>
      </div>
    );

  if (!currentQuestion) return null; // jeszcze nie wylosowano

  const borderColor =
    difficulty === "easy" ? "border-green-500" : "border-red-500";

const shadowColor =
  difficulty === "easy"
    ? "0 0 15px 0 rgba(34,197,94,0.5)"
    : "0 0 15px 0 rgba(239,68,68,0.5)";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 to-cyan-200">
      <Snow />
      <div className="absolute top-6 pl-4 w-full"><RoundButton icon={Home} iconSize={32} onClick={() => {goBack();}} /></div>
      <div className={`p-6 bg-slate-50 rounded-2xl h-64 w-1/4 ${borderColor} border-4 z-30 flex flex-col justify-center items-center`} style={{ boxShadow: shadowColor }}>
        <p className="text-3xl mb-6">{currentQuestion.text}</p>

        <DefaultButtons text="Show Answer" onClick={() => {
                setShowAnswer(true);
        }} sizeMulti={0.5}/>

        <img src="src/public/assets/santa.png" alt="santa" className="fixed left-[53rem] top-[26rem] w-48 block pointer-events-none select-none transform scale-x-[-1]" />
      </div>

      {showAnswer && (
        <>
          {/* przyciemnione tło */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowAnswer(false)}
          />

          {/* okienko w środku */}
          <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-lg w-1/2 items-center justify-center flex flex-col">
            <p className="text-[6rem] mb-4">{currentQuestion.answer}</p>
            <DefaultButtons text="Close" onClick={() => {
                markUsed(currentQuestion);
                setShowAnswer(false);
                goBack();
              }} sizeMulti={0.7}/>
          </div>
        </>
      )}
      <img src="src/public/assets/snow.svg" alt="snow" className="absolute bottom-0 left-0 w-full block pointer-events-none select-none" />

    </div>
  );
}
