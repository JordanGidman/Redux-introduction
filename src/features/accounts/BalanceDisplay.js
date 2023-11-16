import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}
//This will map some state from our store to a prop in this case the balance. The connect function redux gives us takes a function as an argument and will resolve into a new function with balanceDisplay as the argument
export default connect(mapStateToProps)(BalanceDisplay);
