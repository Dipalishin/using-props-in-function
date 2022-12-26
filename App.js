import "./App.css";
import ExpenseItem from "./ExpenceItem/ExpenceItem";
function App() {
  const expenses = [
    {
      title: "car Insurance",
      amount: 294,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "company",
    },
    {
      title: "Toilet Paper",
      amount: 300,
      date: new Date(2021, 5, 21),
      locationOfExpenditure: "shop",
    },
    {
      title: "Market",
      amount: 500,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Market",
    },
    {
      title: "Furniture",
      amount: 700,
      date: new Date(2021, 2, 30),
      locationOfExpenditure: "Shop",
    },
  ];
  return (
    <div className="App">
      
        <ExpenseItem expenses={expenses}/>
      
    </div>
  );
}

export default App;
