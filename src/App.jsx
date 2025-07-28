import React from 'react'
import { useState } from 'react'
import Header from "./Components/Pages/Header.jsx"
import TotalExpense from './Components/Pages/TotalExpense.jsx'
import ExpenseForm from './Components/Pages/ExpenseForm.jsx'
import EmptyList from './Components/Pages/EmptyList.jsx'
import ExpenseList from './Components/Pages/ExpenseList.jsx'
import TotalCredit from './Components/Pages/TotalCredit.jsx'


const App = () => {
  const [totalExpenses, setTotalExpense] = useState(0);
  const [transactionCount, setTransactionCount] = useState(0);
  const [expenseList, setExpenseList] = useState([]);
  const [totalCredit,setTotalCredit] = useState(15000);
  
  function DeleteExpense(index){
    const toRemove = expenseList[index];
    setTotalExpense(t => t- toRemove.amount);
    setTransactionCount(t=> t-1);
    setTotalCredit(c=> c+toRemove.amount);
    setExpenseList( prevList => {
      return prevList.filter( (_,i) => i!== index);
    })
  }

  
  return (
    <>
    <Header />

    <main className='main-container'>
      <div>
      <TotalExpense totalExpenses = {totalExpenses} transactionCount ={transactionCount}/> <br/>
      <TotalCredit totalCredit = {totalCredit} setTotalCredit = {setTotalCredit} transactionCount ={transactionCount}/> 
      </div>

      <ExpenseForm setTransactionCount = {setTransactionCount} 
      setTotalExpense ={setTotalExpense} 
      expenseList={expenseList} 
      setExpenseList={setExpenseList}
      setTotalCredit={setTotalCredit}/>

    </main>
    {transactionCount === 0 ? <EmptyList/> : <ExpenseList expenseList= {expenseList} DeleteExpense={DeleteExpense}/>}
    
    </>
  )
}

export default App