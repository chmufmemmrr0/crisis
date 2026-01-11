import { useNavigate } from "react-router-dom";
import RoundButton from "../components/RoundButton";
import TuneCell from "../components/TuneCell"
import Snow from "../components/Snow";
import { Home } from "lucide-react";

export default function Tune() {
  const navigate = useNavigate();

  const goBack = () => {
      navigate(`/`);
  };


  const lightsImg = document.querySelector("#lights");
  let lightsCounter = 0;
  let flag = true;
  if(flag)
  {
    flag = false;
    setInterval(function(){
      lightsCounter++;
      if(lightsImg)
        lightsImg.setAttribute("src", "src/assets/lights_" + lightsCounter + ".svg");
      if (lightsCounter===3) lightsCounter=0;
    }, 1000)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-100 to-cyan-200 flex justify">
      <img src="src/assets/lights_1.svg" alt="lights" id="lights" className="absolute top-0 left-0 w-full block pointer-events-none select-none" />
      <img src="src/assets/snow.svg" alt="snow" className="z-1 absolute bottom-0 left-0 w-full block pointer-events-none select-none" />
      <Snow />
      <div className="z-10 absolute top-6 pl-4 w-full"><RoundButton icon={Home} iconSize={32} onClick={() => {goBack();}} /></div>
      <div className="z-10 w-2/3 h-auto m-auto px-16 box-border">
        <div className="w-full h-24 bg-slate-50 rounded-full mb-10 shadow-xl flex text-zinc-700">
          <div className="w-1/3 flex justify-center items-center text-7xl">100</div>
          <div className="w-1/3 flex justify-center items-center text-7xl">200</div>
          <div className="w-1/3 flex justify-center items-center text-7xl">300</div>
        </div>
        <div className="flex w-full gap-10">
          <div className="flex flex-col w-full gap-5">
            <TuneCell songId={0} startTime={10} songTitle={"Last Christmas"}/>
            <TuneCell songId={1} startTime={10} songTitle={"All I Want for Christmas Is You"}/>
            <TuneCell songId={2} startTime={10} songTitle={"Snowman"}/>
            <TuneCell songId={3} startTime={10} songTitle={"Let It Snow"}/>
            <TuneCell songId={4} startTime={10} songTitle={"Silent Night"}/>
          </div>
          <div className="flex flex-col w-full gap-5">
            <TuneCell songId={5} startTime={10} songTitle={"White Christmas"}/>
            <TuneCell songId={6} startTime={10} songTitle={"Santa Tell Me"}/>
            <TuneCell songId={7} startTime={10} songTitle={"We Wish You a Merry Christmas"}/>
            <TuneCell songId={8} startTime={10} songTitle={"It's the Most Wonderful Time of the Year"}/>
            <TuneCell songId={9} startTime={10} songTitle={"It's Beginning to Look a Lot Like Christmas"}/>
          </div>
          <div className="flex flex-col w-full gap-5">
            <TuneCell songId={10} startTime={10} songTitle={"Happy Xmas (War Is Over)"}/>
            <TuneCell songId={11} startTime={10} songTitle={"Rudolph, the Red-Nosed Reindeer"}/>
            <TuneCell songId={12} startTime={10} songTitle={"Santa Baby"}/>
            <TuneCell songId={13} startTime={10} songTitle={"Jingle Bells"}/>
            <TuneCell songId={14} startTime={10} songTitle={"Rockin’ Around the Christmas Tree"}/>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}