import Inputs from "./Inputs";

export default function InputSection({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Inputs
          name={"initialInvestment"}
          value={userInput}
          onInputChange={onChange}
        />
        <Inputs
          name={"annualInvestment"}
          value={userInput}
          onInputChange={onChange}
        />
      </div>
      <br />
      <div className="input-group">
        <Inputs
          name={"expectedReturn"}
          value={userInput}
          onInputChange={onChange}
        />
        <Inputs name={"duration"} value={userInput} onInputChange={onChange} />
      </div>
    </section>
  );
}
