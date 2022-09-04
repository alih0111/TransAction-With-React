import { useEffect, useState } from "react";

export default function TransActionComponent(props) {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(props.transaction);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(props.transaction);
      return;
    }
    const filtered = props.transaction.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [props.transaction]);

  if (!props.transaction.length) return <h3>add some transaction</h3>;

  return (
    <section>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="search for tnx.."
        className="search"
      />
      {filteredTnx.length
        ? filteredTnx.map((t) => (
            <div
              key={t.id}
              className="transaction"
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
            >
              <span>{t.desc}</span>
              <span>$ {t.amount}</span>
            </div>
          ))
        : "no item matchs !"}
    </section>
  );
}
