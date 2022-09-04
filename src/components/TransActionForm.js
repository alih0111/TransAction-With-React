import React, { useState } from "react";

export default function TransActionForm({ addTransaction, setIsShow }) {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
      />{" "}
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValues.amount}
      />{" "}
      <div className="radioBOx">
        <input
          type="radio"
          onChange={changeHandler}
          value="expense"
          name="type"
          checked={formValues.type === "expense"}
          id="expense"
        />
        <label htmlFor="expense"> Expense </label>{" "}
        <input
          type="radio"
          onChange={changeHandler}
          value="income"
          name="type"
          checked={formValues.type === "income"}
          id="income"
        />
        <label htmlFor="income"> Income </label>{" "}
      </div>{" "}
      <button className="btn primary" type="submit">
        {" "}
        Add Transaction{" "}
      </button>{" "}
    </form>
  );
}
