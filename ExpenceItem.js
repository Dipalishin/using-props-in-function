import ExpenceDate from "../Expense/ExpenceDate";
import "../Expense/ExpenceItem.css";
import ExpenceDetails from "../Expense/ExpenceDetails";
import React, { useState } from "react";
function ExpenseItem(props) {
const [amount,setAmount]=useState(props.amount);
const expenceChange=()=>{
  setAmount('100');
}

  

  return (
    <div className="expense-item">
      <ExpenceDate date={props.date} />
      <ExpenceDetails title={props.title} amount={amount} locationOfExpenditure={props.locationOfExpenditure}/>
            <button onClick={expenceChange}>Change Expence</button>
    </div>
  );
}
export default ExpenseItem;
