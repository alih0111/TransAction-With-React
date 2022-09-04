import React, { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

export default function Expense() {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const addTransaction = (formValues) => {
    setTransaction([...transaction, { ...formValues, id: Date.now() }]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transaction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp)
    setIncome(inc)
  }, [transaction]);

  return (
    <section className="container">
      <OverViewComponent
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransActionComponent transaction={transaction} />
    </section>
  );
}
