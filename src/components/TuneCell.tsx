import { CirclePlay , Eye, ClockFading, Pause } from "lucide-react";
import RoundButton from "./RoundButton";
import Present from "./Present";
import { useState } from "react";

interface TuneCellProps {
  songId: number;
  startTime: number;
  songTitle: string;
}

export default function TuneCell({songId, startTime, songTitle}: TuneCellProps){
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlayingLong, setIsPlayingLong] = useState(false);
    let timeoutSongId: ReturnType<typeof setTimeout>;

    const Play = (start: number) => {
        const id = "#song" + songId;
        const audio: HTMLAudioElement = document.querySelector(id) as HTMLAudioElement;
        const timer = start ? 5000 : 10000;
        if(audio) 
        {
            if(isPlaying || isPlayingLong)
            {
                clearTimeout(timeoutSongId);
                audio.pause();
                audio.currentTime = 0;
                start ? setIsPlayingLong(false) : setIsPlaying(false);
                
            }
            else
            {
                audio.currentTime = start;
                audio.play();
                start ? setIsPlayingLong(true) : setIsPlaying(true);
                timeoutSongId = setTimeout(() => {
                    audio.pause();
                    start ? setIsPlayingLong(false) : setIsPlaying(false);
                    audio.currentTime = 0;
                }, timer);
            }
        }
    }

    const Reveal = () => {
        const id = "#songDiv" + songId;
        const div = document.querySelector(id);
        if(div)
        {
            div.innerHTML = `"${songTitle}"`;
        }
    }




    return(
        <div className='relative overflow-clip w-full h-24 p-2 flex bg-slate-50 rounded-full shadow-xl text-2xl items-center justify-center' id={`songDiv${songId}`}>
            <div className="z-0 w-full flex justify-center pt-2"><RoundButton icon={isPlaying ? Pause : CirclePlay} iconSize={32} size={20} onClick={() => Play(0)} /></div>
            <div className="z-0 w-full flex justify-center pt-2"><RoundButton icon={isPlayingLong ? Pause : ClockFading} iconSize={32} size={20} onClick={() => Play(startTime)} /></div>
            <div className="z-0 w-full flex justify-center pt-2"><RoundButton icon={Eye} iconSize={32} size={20} onClick={() => Reveal()} /></div>
            <audio className="hidden" id={`song${songId}`}>
                <source src={"/crisis/assets/songs/"+songId+".mp3"} />
            </audio>
            <Present songId={songId}/>
        </div>
    );
}