import React, { useEffect, useState } from "react";

const ExpenseForm = ({ expenseList, setExpenseList, setTransactionCount, setTotalExpense, setTotalCredit}) => {

  const [amount, setAmount] = useState();
  const [expenseDate, setexpenseDate] = useState(formatTime());
  const [description, setDescription] = useState();
  const [category, setCategory] = useState('');

  function formatTime() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  function handleAmountChange(e) {
    setAmount(Number(e.target.value));
  }

  function handleDateChange(e) {
    setexpenseDate(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function AddExpense(e) {
    e.preventDefault();
    if (amount > 0 && description.length > 2 && category !== "") {
      const newExpense = {
        amount: amount,
        date: expenseDate,
        description: description,
        category: category,
      };
      
      setExpenseList([...expenseList, newExpense]);
      setTransactionCount(t => t + 1);
      setTotalExpense(t => t + newExpense.amount);
      setTotalCredit(c => c-newExpense.amount);
    }
    else{
      alert("Invalid Inputs. Please Try Again.");
    }
    
    setAmount('');
    setCategory("");
    setDescription("");
    setexpenseDate(formatTime());
  }

  

  return (
    <>
      <div className="Form-Container">
        <div className="Form-Title">
          <img src="./images/addIcon.png" />
          Add New Expense
        </div>

        <form
          className="Expense-Form"
          onSubmit={(e) => {
            AddExpense(e);
          }}
        >
          <div className="Expense-Form-layer1">
            <div>
              <label>Amount</label> <br />
              <input
                type="number"
                placeholder="0.00"
                step="0.01"
                min="0"
                value={amount}
                onChange={(e) => {
                  handleAmountChange(e);
                }}
              />
            </div>
            <div>
              <label>Date</label> <br />
              <input
                type="date"
                value={expenseDate}
                onChange={(e) => {
                  handleDateChange(e);
                }}
              />
            </div>
          </div>
          <div className="Expense-Form-layer2">
            <label>Description</label>
            <input
              type="text"
              placeholder="What did you spend on?"
              onChange={(e) => {
                handleDescriptionChange(e);
              }}
              value={description}
            />
          </div>

          <div className="Expense-form-category">
            <span>Category</span>
            <select value={category}
              onChange={(e) => {
                handleCategoryChange(e);
              }}
            >
              <option value="" disabled selected hidden>
                Select an option
              </option>
              <option value="Entertainment">Entertainment</option>
              <option value="Food and Dining">Food and Dining</option>
              <option value="Groceries">Groceries</option>
              <option value="Health">Health</option>
              <option value="Shopping">Shopping</option>
              <option value="Taxes">Taxes</option>
              <option value="Transportation">Transportation</option>
              <option value="Others">Other</option>
            </select>
          </div>

          <button>Add Expense</button>
        </form>
      </div>
    </>
  );
};

export default ExpenseForm;
