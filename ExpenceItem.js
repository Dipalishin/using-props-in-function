import ExpenceDate from "./ExpenceDate";
import "./ExpenceItem.css";
import ExpenceDetails from "./ExpenceDetails";
function ExpenseItem(props) {
  return(
        <div className="expense-item">
          <ExpenceDate date={props.date}/>
          <ExpenceDetails amount={props.amount}/>
          
        </div>   
     
    ) }
export default ExpenseItem;
