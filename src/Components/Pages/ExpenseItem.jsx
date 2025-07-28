import React from 'react'

const ExpenseItem = ( { item, DeleteExpense , index} ) => {
  return (
    <>
        <div className='ExpenseItem-Container'>
            <div className='ExpenseItem-Left'>
                <div className='ExpenseItem-Left-layer1'>
                    <span>{item.description}</span>
                    <b>${item.amount}</b>
                </div>

                <div className='ExpenseItem-Left-layer2'> 
                    <span className='ExpenseItem-Left-layer2-left'> 
                        <img  src= "./images/dateIcon.png" alt='[-]'/> 
                        <span>{item.date} </span>
                    </span>
                    <span className='ExpenseItem-Left-layer2-right'>
                        <img src='./images/categoryIcon.png' alt="|_|"/>
                        <span>{item.category}</span>
                    </span>
                </div>  

            </div>

            <button className='ExpenseItem-delete-btn' onClick={() => DeleteExpense(index)}>
                <img src='./images/deleteIcon.png' alt='[-]'/>
            </button>

        </div>
    </>
  )
}

export default ExpenseItem