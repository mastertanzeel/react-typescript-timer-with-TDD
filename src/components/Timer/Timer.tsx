import React, { useState, useEffect } from 'react';
import TimerButton from '../TimerButton/TimerButton';
import { Grid } from "@material-ui/core"

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        if (minutes === 25) {
          return
        }
        if (seconds === 59) {
          setMinutes((minutes) => minutes + 1);
          setSeconds(0);
        } else {
          setSeconds((seconds) => seconds + 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={10} md={10}>
        <h1 style={{ textAlign: 'center' }}>Timer App</h1>
      </Grid>
      <Grid item xs={10} sm={10} md={10}>
        <div style={{ textAlign: 'center' }}>
          <h1>{("0" + minutes).slice(-2)} : {("0" + seconds).slice(-2)}</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TimerButton buttonAction={toggle} buttonValue={"start"} isOn={isActive} />
          <TimerButton buttonAction={reset} buttonValue={"reset"} isOn={isActive} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Timer;
