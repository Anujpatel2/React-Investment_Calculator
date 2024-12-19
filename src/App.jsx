import Header from "../components/Header";
import InputSection from "../components/InputSection";
import OutputTable from "../components/OutputTable";
import { useState } from "react";

function App() {
  const [results, setResults] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(name, event) {
    setResults((prevInputFields) => {
      return {
        ...prevInputFields,
        [name]: +event.target.value,
      };
    });
  }

  const inputIsValid = results.duration > 0;

  return (
    <>
      <Header />
      <InputSection userInput={results} onChange={handleInputChange} />
      {inputIsValid && <OutputTable results={results} />}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
