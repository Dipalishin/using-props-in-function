import "./ExpenceItem.css";
function ExpenseItem(props) {
  console.log(props.expenses);
  // return (
  //   <div>
  //    {props.expenses.map((expense) => {
  //       <div className="expense-item">
  //       <div>{expense.date.toISOString()}</div>
  //         <div className="expense-item__description">
  //           <h2>{expense.title}</h2>
  //           <div className="expense-item__price">${expense.amount}</div>
  //           <div className="expense-item__description">
  //             <h2>{expense.locationOfExpenditure}</h2>
  //           </div>
  //         </div>
  //        </div>}
  //     )
  //    }
  //    </div>)
  return(<div>
    {
      props.expenses.map((expense)=>(
        <div className="expense-item">
      <div>{expense.date.toISOString()}</div>
      <div className="expense-item__description">
           <h2>{expense.title}</h2>
             <div className="expense-item__price">${expense.amount}</div>
             <div className="expense-item__description">
               <h2>{expense.locationOfExpenditure}</h2>
             </div>
           </div>

      </div>
       ))
    }
  </div>)

 }
export default ExpenseItem;
