import React from 'react'

const TotalCredit = ({ totalCredit, transactionCount}) => {
   
  return (
    <>

    <div className='Total-Expense-Container'>
        <div className='Total-Expense-Title'>
            <span  className='Total-Expense-Title-span1'>Credit Available</span>
            <span className='Total-Expense-Title-span2'>$</span>
        </div>

        <div className='Total-Expense-Value'>
            <span style={{ color: totalCredit>=0 ? "gold" : "red" }}>${totalCredit}</span>
        </div>

        <div className='Total-Expense-Transactions'>
          <span> {transactionCount} transations recorded </span>  
        </div>
    </div>
    </>
  )
}

export default TotalCredit