import styles from "./TransactionHistory.module.css";

import PropTypes from "prop-types"

const TransactionHistory = ({ items }) => {
    return (
      <div className={styles.black}>
        <table className="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(items => {
              return (
                <tr key={items.id}>
                  <td>
                    <span>{items.type}</span>
                  </td>
                  <td>
                    <span>{items.amount}</span>
                  </td>
                  <td>
                    {' '}
                    <span>{items.currency}</span>
                  </td>
                </tr>
              );
            })}

            
          </tbody>
        </table>
      </div>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
  
};

export default TransactionHistory;