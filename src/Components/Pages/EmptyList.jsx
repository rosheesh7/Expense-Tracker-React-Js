
import React from 'react'

const EmptyList = () => {
  return (
    <>
    <div className=' empty-container'>
        <img src='./images/EmptyMoneyIcon.png' alt = ' no $'/>
        <span>No Expenses Yet</span>
        <i>Start tracking your expenses by adding your first entry above.</i>
    </div>
    </>
  )
}

export default EmptyList