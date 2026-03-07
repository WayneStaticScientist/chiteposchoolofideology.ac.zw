"use client";
import { useEffect, useState } from "react";

export const Typewriter = ({ speed = 150 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ["MIND.", "FUTURE.", "NATION.", "SPIRIT."];

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[loopNum % words.length];
      const isFinishingWord = !isDeleting && displayText === currentWord;
      const isFinishingDelete = isDeleting && displayText === "";

      if (isFinishingWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isFinishingDelete) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        const nextChar = isDeleting
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1);

        setDisplayText(nextChar);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  return (
    <span className="relative">
      <span className="text-green-500">{displayText}</span>
      <span className="inline-block w-[4px] h-[0.8em] bg-green-500 ml-1 animate-pulse align-middle"></span>
    </span>
  );
};
