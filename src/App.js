import { useState } from "react";
const numberArray = [
  24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];
const textArray = [
  { text: "Exercise 👟👟", hour: 10, className: "text" },
  { text: "Do nothing 😴", hour: 60, className: "text1" },
  { text: "Lunch time 🍱", hour: 90, className: "text2" },
  { text: "Take a nap 😪", hour: 120, className: "text3" },
  { text: "Read comic 📕", hour: -20, className: "text4" },
  { text: "Dinner time 🥘", hour: 15, className: "text5" },
  { text: "Movie & him 💜", hour: 45, className: "text6" },
  { text: "🌕⭐️💤 ", hour: 40, className: "text7" },
];
const needleArray = [5, 6, 9, 11, 13, 15, 18, 20, 22];
export default function App() {
  const [hour, setHour] = useState(6);
  const [second, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const [start, setStart] = useState(false);
  const displayTime = () => {
    let date = new Date();
    setHour(date.getHours());
    setMinute(date.getMinutes());
    setSeconds(date.getSeconds());
    // console.log(date.getSeconds());
  };
  if (start) {
    setInterval(displayTime, 1000);
  }
  return (
    <div className="container">
      <h1>초원 오늘 스케줄</h1>
      <p className="title">Thao Nguyen's Time Table</p>
      <div className="outerCircle">
        <div className="clockCircle">
          <div
            className="hand"
            style={{
              rotate: `${15 * hour + minute / 4}deg`,
            }}
          >
            <i
              style={{ width: "8px", height: "100px", borderRadius: "8px" }}
            ></i>
          </div>
          <div className="hand" style={{ rotate: `${6 * minute}deg` }}>
            <i style={{ height: "180px" }}></i>
          </div>
          <div className="hand" style={{ rotate: `${6 * second}deg` }}>
            <i
              style={{
                height: "210px",
                width: "1px",
                backgroundColor: "#ccb910",
              }}
            ></i>
          </div>
          {numberArray.map((number) => (
            <Hour rotate={numberArray.indexOf(number)} text={number} />
          ))}
          {needleArray.map((number) => (
            <Needle rotate={number} text="Sleep" />
          ))}
          {textArray.map((number) => (
            <Text
              rotate={number.hour}
              text={number.text}
              className={number.className}
            />
          ))}
          <button onClick={() => setStart((start) => !start)}>PLAY</button>
        </div>
      </div>
    </div>
  );
}
function Hour({ rotate, text }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: `rotate(calc(15deg*${rotate}))`,
        textAlign: "center",
        inset: "-32px",
        fontFamily: "Nanum Gothic",
        fontWeight: "400px",
        fontSize: "16px",
        zIndex: "-10",
      }}
    >
      <p>{text}</p>
      <span
        style={
          Number(text) % 6 === 0
            ? {
                width: "4px",
                height: "10px",
                backgroundColor: "#22202c",
              }
            : {}
        }
      >
        |
      </span>
    </div>
  );
}

function Needle({ rotate }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: `rotate(calc(15deg*${rotate}))`,
        textAlign: "center",
        inset: "20px",
        fontFamily: "Nanum Gothic",
        fontWeight: "400px",
        fontSize: "16px",
        zIndex: "-10",
      }}
    >
      <span
        style={{
          width: "2px",
          height: "170px",
          display: "inline-block",
          backgroundColor: "#22202c",
        }}
      ></span>
    </div>
  );
}

function Text({ text, rotate, className }) {
  return (
    <div className={className} style={{ rotate: `${rotate}deg` }}>
      {text}
    </div>
  );
}
