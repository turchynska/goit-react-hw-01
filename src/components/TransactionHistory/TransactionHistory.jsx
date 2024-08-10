import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items})=>{
    return(
<table className={css.table}>
  <thead className={css.top}>
    <tr className={css.thead}>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map(item => (
          <tr className={css.row} key={item.id}>
            <td className={css.cell}>{item.type}</td>
            <td className={css.cell}>{item.amount}</td>
            <td className={css.cell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;