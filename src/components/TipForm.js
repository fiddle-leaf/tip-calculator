export default function TipForm({ bill, setBill }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setBill({ ...bill, submitted: true });
  };

  const handleChange = (e) => {
    setBill({ ...bill, submitted: false, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="total-amount">
          Bill Total:&nbsp;$
          <input
            type="number"
            name="total"
            value={bill.total}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div>
        <label htmlFor="tip">Tip Amount:&nbsp;</label>
        <select name="tip" onChange={handleChange}>
          <option value="">Choose Tip Percentage</option>
          <option value="0.10">10%</option>
          <option value="0.15">15%</option>
          <option value="0.18">18%</option>
          <option value="0.20">20%</option>
          <option value="0.25">25%</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Get Tip Total" />
      </div>
    </form>
  );
}
