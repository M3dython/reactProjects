// boiler plate
// state is the current state before update and action is what we are trying to do
// it is possible to use switch statement inside reducer
const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    //change the value of the cart property to an empty array, cleaning the cart
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === 'INCREASE') {
    //iterate trough the chart that is before the update
    let tempCart = state.cart.map((cartItem) => {
      //if the cartItem id is the same as the payload, return the amount +1
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === 'DECREASE') {
    //iterate trough the chart that is before the update
    let tempCart = state.cart
      .map((cartItem) => {
        //if the cartItem id is the same as the payload, return the amount -1
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
        //if the amount is not zero, return to temp cart, if it is zero remove it from the cart
      })
      //if the amount is not zero, return to temp cart, if it is zero remove it from the cart
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === 'GET_TOTALS') {
    // reducer that return an object
    //let is used to fix the bug of decimal cases
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        console.log(price, amount);

        const itemTotal = price * amount;
        cartTotal.total += itemTotal;

        // cartTotal is an object with the property of amount that receives amount
        //changing the icon in the bag
        cartTotal.amount += amount;
        return cartTotal;

        // reducer that return an object
      },
      { total: 0, amount: 0 }
    );
    //fixing the decimal cases, by parsing the string result of total
    total = parseFloat(total.toFixed(2));

    // return the deconstructing
    return { ...state, total, amount };
  }
  //if it is fetching the data, turn loading to true and displays it
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'DISPLAY_ITEMS') {
    // set cart items fetched
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((cartItem) => {
        //if the id iterated matched the id passed returns a new item, if not returns the current
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
        //if the amount is not zero, return to temp cart, if it is zero remove it from the cart
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  throw new Error('no matching action type');
};

export default reducer;
