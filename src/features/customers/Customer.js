import { useSelector } from "react-redux";

function Customer() {
  //similar to context the useSelector API subscribes to the store and whenever the store changes all the consumers will be re-rendered
  const customer = useSelector((store) => store.customer.fullName);

  console.log(customer);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
