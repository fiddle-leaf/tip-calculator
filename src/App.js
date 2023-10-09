import { useState } from "react";
import TipForm from "./components/TipForm";

function App() {
  const [bill, setBill] = useState({
    total: 0,
    tip: 0.0,
    submitted: false,
  });

  const tipTotal = (bill.total * bill.tip).toFixed(2);
  const billTotal = (bill.total * (1 + bill.tip)).toFixed(2);
  return (
    <div className="App">
      <header>
        <h1>Tip Calculator</h1>
      </header>
      <main>
        <TipForm setBill={setBill} bill={bill} />
        {bill.submitted ? (
          <div>
            <h2>Results</h2>
            <ul>
              <li>Tip Amount:&nbsp;${tipTotal}</li>
              <li>Bill with Tip:&nbsp;${billTotal}</li>
            </ul>
            <p>
              From ${bill.total} total and {bill.tip * 100}% tip.
            </p>
          </div>
        ) : (
          false
        )}
      </main>
      <footer>
        <p>fiddle-leaf &copy; 2023.</p>
      </footer>
    </div>
  );
}

export default App;
