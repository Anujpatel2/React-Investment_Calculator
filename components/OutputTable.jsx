import {
  calculateInvestmentResults,
  formatter,
} from "../src/util/investment.js";

export default function OutputTable({ results }) {
  let result = calculateInvestmentResults(results);

  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((row, rowIndex) => {
          const totalInterest =
            row.valueEndOfYear -
            row.annualInvestment * row.year -
            initialInvestment;

          const totalAmountInvested = row.valueEndOfYear - totalInterest;
          return (
            <tr key={rowIndex}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
