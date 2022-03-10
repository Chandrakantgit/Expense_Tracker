import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Approach for handling only one state
  // const [userInput, setUserInput] = useState({
  //   eneteredTitle: "",
  //   eneteredAmount: "",
  //   eneteredDate: "",
  // });

  //functions for handling input
  // const titleHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     eneteredTitle: event.target.value,
  //   });
  // };

  // const amountHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     eneteredAmount: event.target.value,
  //   });
  // };

  // const dateHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     eneteredDate: event.target.value,
  //   });
  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expensedata = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //communicating to parent component
    props.onSaveExpenseData(expensedata);

    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
