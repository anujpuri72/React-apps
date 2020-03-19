console.clear();
const CreatePolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  };
};
const CreateClaim = (name, amountclaimed) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountclaimed: amountclaimed
    }
  };
};
const DeletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

const ClaimHistory = (OldClaimList = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...OldClaimList, action.payload];
  }
  return OldClaimList;
};

const accounting = (money = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return money - action.payload.amountclaimed;
  } else if (action.type === "CREATE_POLICY") {
    return money + action.payload.amount;
  }
  return money;
};

const policy = (listofpolicy = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listofpolicy, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listofpolicy.filter(name => name !== action.payload.name);
  }
  return listofpolicy;
};
const { createStore, combineReducers } = Redux;
const ourdept = combineReducers({
  accounting: accounting,
  ClaimHistory: ClaimHistory,
  policy: policy
});
const store = createStore(ourdept);
store.dispatch(CreatePolicy("anuj", 1000));
store.dispatch(CreatePolicy("prakash", 1000));
store.dispatch(DeletePolicy("anuj"));
store.dispatch(CreateClaim("prakash", 100));

console.log(store.getState());
