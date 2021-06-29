function setMenu(menu) {
  return {
    type: 'SET_MENU',
    payload: menu
  }
}

function setUser(user) {
  return {
    type: 'SET_USER',
    payload: user
  }
}

function updateAmount(amount) {
  return {
    type: 'UPDATE_AMOUNT',
    payload: amount
  }
}

function setOrderdetails(order) {
  return {
    type: 'SET_ORDERDETAILS',
    payload: order
  }
}

function setOffers(offers) {
  return {
    type: 'SET_OFFERS',
    payload: offers
  }
}

export { setMenu, setUser, updateAmount, setOrderdetails, setOffers }
