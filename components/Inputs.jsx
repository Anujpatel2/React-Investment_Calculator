export default function Inputs({ name, onInputChange, value }) {
  return (
    <div>
      <label>{name}</label>
      <input
        type="number"
        required
        value={value[name]}
        onChange={(event) => onInputChange(name, event)}
      />
    </div>
  );
}
