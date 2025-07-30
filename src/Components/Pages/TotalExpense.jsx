import React, { use, useState } from "react";

const TotalExpense = ({ totalExpenses, transactionCount }) => {
  return (
    <>
      <div className="Total-Expense-Container">
        <div className="Total-Expense-Title">
          <span className="Total-Expense-Title-span1">Total Expense</span>
          <span className="Total-Expense-Title-span2">$</span>
        </div>

        <div className="Total-Expense-Value">
          <span style={{ color: "gold" }}>${totalExpenses.toFixed(2)}</span>
        </div>

        <div className="Total-Expense-Transactions">
          <span> {transactionCount} transations recorded </span>
        </div>
      </div>
    </>
  );
};

export default TotalExpense;
