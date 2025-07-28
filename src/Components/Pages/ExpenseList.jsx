import React from 'react'
import ExpenseItem from './ExpenseItem.jsx'
const ExpenseList = ({expenseList, DeleteExpense}) => {


  return (
    <>
      <div className='ExpenseList-Container'>
        <div className='ExpenseList-Header'>
            <img src='./images/expenseIcon.png' alt='$$'/>
            <span>Recent Expenses</span>
        </div>
        <div className='ExpenseList-Main'>
          <ul>
            {expenseList.map((item,index) => {
              console.log(item);
              return <ExpenseItem key={index} item={item} DeleteExpense = {DeleteExpense} index ={index}/>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ExpenseList