import OrderHistoryList from './OrderHistoryList'
import { useSelector } from 'react-redux'
import { useEffect, useState, Fragment } from 'react'
import checkIfDiscount from './discount'

function OrderHistory() {
  const user = useSelector((state) => state.user)
  const offers = useSelector((state) => state.offers)
  const url = `http://localhost:9999/api/order/${user.userid}`
  const [orderHistory, setOrderHistory] = useState([])
  const [total, setTotal] = useState({})

  function convertToDate(obj) {
    if (obj.orderCreated) {
      return (obj.orderCreated = new Date(obj.orderCreated))
    } else {
      return
    }
  }
  useEffect(() => {
    async function getorderHistory() {
      const response = await fetch(url)
      const data = await response.json()
      data.map((item) => {
        return item.map((obj) => {
          return convertToDate(obj)
        })
      })
      data.map(() => {
        return data.sort((a, b) => b[0].orderCreated - a[0].orderCreated)
      })
      setOrderHistory(data)
    }
    getorderHistory()
  }, [url])

  useEffect(() => {
    setTotal(checkIfDiscount(offers, 0, orderHistory))
  }, [orderHistory, offers])

  return (
    <div className='order-history'>
      <h2 className='white headline'>Orderhistorik</h2>
      <ul>
        {orderHistory.map((order, index) => {
          return <OrderHistoryList key={index} order={order} offers={offers} />
        })}
      </ul>
      <div className='total'>
        <p className='white'>Totalt spenderat</p>
        {total.discount ? (
          <Fragment>
            <p className='red'>{total.totalDiscount} Kr</p>{' '}
            <p className='white line-small'>{total.total} Kr</p>
          </Fragment>
        ) : (
          <p className='white'>{total.total} Kr</p>
        )}
      </div>
    </div>
  )
}

export default OrderHistory;
