import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [timeDiff, setTimeDiff] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date1 = new Date();
      const date2 = new Date("01/01/2025");
      const diff = (date2.getTime() - date1.getTime()) / 1000;
      setTimeDiff(Math.ceil(diff));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>Time Difference:</p>
      <p>{timeDiff}</p>
    </div>
  );
}
