import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const minCounted = 0.1;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

var msg = new SpeechSynthesisUtterance('Session completed. Lets stretch')
  msg.voice = window.speechSynthesis.getVoices()[2]
  msg.rate = 0.85; 

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;

export function Timer()  {
    
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + minCounted*60; // use UNIX timestamp in seconds
    const remainingTime = endTime - stratTime;
    
    return (
    <div className="login-wrapper">
    <CountdownCircleTimer
        {...timerProps}
        colors={[["#7E2E84"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>

      <CountdownCircleTimer
        {...timerProps}
        colors={[["#D14081"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={()=> {
        speechSynthesis.speak(msg); alert("Session done")}
         }
      >
        {({ elapsedTime }) =>
          renderTime("seconds", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
    </div>
  )
}
