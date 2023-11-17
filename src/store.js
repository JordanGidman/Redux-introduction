import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

import { configureStore } from "@reduxjs/toolkit";

//combines our 2 reducers as we dispatch actions to the store and not the reducer it is cleaner to combine them like this and redux will figure out which to use behind the scenes

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
