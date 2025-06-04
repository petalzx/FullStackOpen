import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}> {text} </button>;
};

const StatisticLine = (
  { text, value, compl } //implicit return w parentheses
) => (
  <tr>
    <td>{text}</td>
    <td>
      {value}
      {compl}
    </td>
  </tr>
);

const Statistics = ({ good, neutral, bad, total }) => {
  //maybe i can do a boolean flag or just use the total variable, boolean will prob be better practice
  if (total === 0) {
    return <div>No feedback given</div>;
  }

  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} compl="%" />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const incrementValue = (feedback) => {
    if (feedback === "good") {
      setGood(good + 1);
    } else if (feedback === "neutral") {
      setNeutral(neutral + 1);
    } else if (feedback === "bad") {
      setBad(bad + 1);
    }
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => incrementValue("good")} text="Good" />
      <Button onClick={() => incrementValue("neutral")} text="Neutral" />
      <Button onClick={() => incrementValue("bad")} text="Bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
