// import cart from '../style/assets/cart.svg'
import Cart from './Cart'
import { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'

function CartBtn() {
  const menu = useSelector((state) => state.menu)
  let order = menu.filter((item) => item.amount > 0)
  let orderAmount = order.map((item) => item.amount)
  if (order[0]) {
    const reducer = (acc, current) => acc + current
    orderAmount = orderAmount.reduce(reducer)
  }
  const [showCart, setShowCart] = useState(false)

  function update() {
    setShowCart(false)
  }

  return (
    <Fragment>
      <div
        className='cart'
        onClick={() => {
          setShowCart(!showCart)
        }}
      >
        <div className='items-in-cart'>
          <p>{order[0] ? orderAmount : order.length}</p>
        </div>
        {/* <img src={cart} alt='cart' /> */}
      </div>
      <Cart show={showCart.toString()} update={update} />
    </Fragment>
  )
}

export default CartBtn;
