let discount
let ItemsOnOffer
let arraySpecials
let arraySpecials2
let total
let totalDiscount

function checkIfDiscount(offers, Menu, history, list) {
  total = 0
  totalDiscount = 0
  arraySpecials = []
  arraySpecials2 = []

  return getOffers(offers, Menu, history, list)
}

function getOffers(offers, Menu, history, list) {
  for (let i = 0; i < offers.length; i++) {
    discount = offers[i].discount
    ItemsOnOffer = offers[i].ItemsOnOffer
  }
  if (Menu !== 0) {
    return createArray(Menu)
  } else if (history !== 0) {
    return createArrayOrderHistory(history)
  } else {
    return createArrayOrderHistoryList(list)
  }
}

function createArray(Menu) {
  for (let i = 0; i < Menu.length; i++) {
    let amount = Menu[i].amount
    let id = Menu[i].id
    total += amount * Menu[i].price
    if (amount > 0) {
      for (let j = 0; j < amount; j++) {
        for (let index = 0; index < ItemsOnOffer.length; index++) {
          if (ItemsOnOffer[index] === id) {
            if (index === 0) {
              arraySpecials = [...arraySpecials, id]
            } else {
              arraySpecials2 = [...arraySpecials2, id]
            }
          }
        }
      }
    }
  }

  return addDiscount()
}

function createArrayOrderHistoryList(list) {
  for (let i = 1; i < list.length; i++) {
    let id = list[i].id
    total += list[i].price
    for (let index = 0; index < ItemsOnOffer.length; index++) {
      if (ItemsOnOffer[index] === id) {
        if (index === 0) {
          arraySpecials = [...arraySpecials, id]
        } else {
          arraySpecials2 = [...arraySpecials2, id]
        }
      }
    }
  }
  return addDiscount()
}

function createArrayOrderHistory(history) {
  for (let i = 0; i < history.length; i++) {
    for (let x = 1; x < history[i].length; x++) {
      let id = history[i][x].id
      total += history[i][x].price
      for (let index = 0; index < ItemsOnOffer.length; index++) {
        if (ItemsOnOffer[index] === id) {
          if (index === 0) {
            arraySpecials = [...arraySpecials, id]
          } else {
            arraySpecials2 = [...arraySpecials2, id]
          }
        }
      }
    }
  }
  return addDiscount()
}

function addDiscount() {
  let loop = false
  let Discount = false
  while (loop === false) {
    if (arraySpecials[0] && arraySpecials2[0]) {
      totalDiscount += discount
      arraySpecials.pop()
      arraySpecials2.pop()
    } else {
      if (totalDiscount > 0) {
        totalDiscount = total - totalDiscount
        Discount = true
      }
      loop = true
    }
  }

  return { total: total, totalDiscount: totalDiscount, discount: Discount }
}

export default checkIfDiscount
