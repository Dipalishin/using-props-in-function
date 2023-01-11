import react,{useState} from 'react';
import ExpenceItem from "../ExpenceItem/ExpenceItem";
import Card from "../ExpenceItem/Card";
import "../ExpenceItem/Expenses.css";
import ExpenseFilter from "../NewExpence/ExpenseFilter";
const Expenses=(props)=> {
  const [filteredYear,setFilteredYear]=useState('2020');

  const filterChangeHandler=(selectedYear)=>{
setFilteredYear(selectedYear);

  }
   
  return (
    <div>
    <Card className="expenses">
                  <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

      <ExpenceItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenceItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenceItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenceItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
    </div>
  );
}

export default Expenses;