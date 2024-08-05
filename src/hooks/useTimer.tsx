import { useState, useEffect } from 'react';

const useTimer = (initialMinute: number) => {
  const [timeLeft, setTimeLeft] = useState(initialMinute * 60);
  const timeOut = timeLeft <= 0;

  useEffect(() => {
    let intervalId = null;

    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [timeLeft]);

  const resetTimer = () => {
    setTimeLeft(initialMinute * 60);
  };

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const time = formatTime(timeLeft);

  return { time, timeOut, resetTimer };
};

export default useTimer;
