import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [timeDiff, setTimeDiff] = useState(null);
  useEffect(() => {
    setInterval(() => {
      let date1 = new Date();
      let date2 = new Date("01/01/2025");
      let diff = (date2.getTime() - date1.getTime()) / 1000;
      setTimeDiff(diff);
    }, 1000);
    return () => {
      clearInterval(diff);
    };
  }, []);
  return (
    <div>
      <p>Time Difference:</p>
      <p>{timeDiff}</p>
    </div>
  );
}
