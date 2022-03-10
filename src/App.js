import { useState } from "react";
import Expenses from "./Components/Features/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
function App() {
  var Dummy = [];
  const [expenses, setExpenses] = useState(Dummy);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
