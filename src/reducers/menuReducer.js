const initalState = {
  menu: [],
  offers: [],
  user: {},
  orderDetails: {}
}

export const menuReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'SET_MENU':
      return {
        ...state,
        menu: action.payload
      }
    case 'SET_OFFERS':
      return {
        ...state,
        offers: action.payload
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'UPDATE_AMOUT':
      return {
        ...state,
        menu: action.payload
      }
    case 'SET_ORDERDETAILS':
      return {
        ...state,
        orderDetails: action.payload
      }
    default:
      return state
  }
}
