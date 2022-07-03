import React, {useState} from "react";
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    const titleCgangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    };
    const amountCgangeHandler=(event)=>{
        setEnteredAmount(event.target.value);

    };
    const dateCgangeHandler=(event)=>{
        setEnteredDate(event.target.value);

    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
       props.onsaveExpenseData(expenseData);
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
  return (
      <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
              <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleCgangeHandler}/>
              </div>
              <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountCgangeHandler}/>
              </div>
              <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"value={enteredDate} onChange={dateCgangeHandler}/>
              </div>
          </div>
          <div className="new-expense__actions">
              <button type="submit">Add expense</button>
          </div>

      </form>
  );
}
export default ExpenseForm;