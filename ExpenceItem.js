import ExpenceDate from "../Expense/ExpenceDate";
import "../Expense/ExpenceItem.css";
import ExpenceDetails from "../Expense/ExpenceDetails";
import React from "react";
function ExpenseItem(props) {
  const deleteExpence=() =>{
   let item= document.getElementsByClassName('.props.id');
   console.log(item);
   //item=item.parentElement;
   //item.remove();


  }
  return (
    <div className="expense-item">
      <ExpenceDate date={props.date} />
      <ExpenceDetails title={props.title} amount={props.amount} locationOfExpenditure={props.locationOfExpenditure}/>
            <button onClick={deleteExpence}>Delete</button>
    </div>
  );
}
export default ExpenseItem;
