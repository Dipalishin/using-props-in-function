import "./App.css";
import ExpenseItem from "./ExpenceItem/Expense/ExpenceItem";
function App(){
  const expenses = [
    {id:"1",
      title: "car Insurance",
      amount: 294,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "company",
    },
    {
      id:"2",
      title: "Toilet Paper",
      amount: 300,
      date: new Date(2021, 5, 21),
      locationOfExpenditure: "shop",
    },
    {
      id:"3",
      title: "Market",
      amount: 500,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Market",
    },
    {id:"4",
      title: "Furniture",
      amount: 700,
      date: new Date(2021, 2, 30),
      locationOfExpenditure: "Shop",
    },
  ];
  return (
    <div className="App">
      <ExpenseItem  className={`exp ${expenses[0].id}`}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        locationOfExpenditure={expenses[0].locationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        locationOfExpenditure={expenses[1].locationOfExpenditure}
     > </ExpenseItem>
      
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        locationOfExpenditure={expenses[2].locationOfExpenditure}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        locationOfExpenditure={expenses[3].locationOfExpenditure}
      ></ExpenseItem>
         
    </div>
  );
}

export default App;
