import React, { useEffect, useState } from "react";

function Time() {
  const [dateTime, setDateTime] = useState(new Date());

  function refreshClock() {
    setDateTime(new Date());
  }

  // Once the component is rendered, create a timer to update the desktop time.
  useEffect(() => {
    // Create a timer that sets the dateTime state to a new Date object every second.
    const timerId = setInterval(refreshClock, 1000);
    // Return a clean-up function to stop the timer.
    return () => clearInterval(timerId);
  }, []);

  return (
    <p id="time">
      {dateTime
        .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
        .replace("AM", "")
        .replace("PM", "")}
    </p>
  );
}

export default Time;
