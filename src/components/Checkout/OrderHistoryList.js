import checkIfDiscount from './discount'
import { useState, useEffect, Fragment } from 'react'

function OrderHistoryList({ offers, order }) {
  const [total, setTotal] = useState({})

  let date

  if (order[0].orderDone) {
    date = new Date(order[0].orderCreated)

    let dateYear = date.getFullYear()
    let dateMonth = '0' + date.getMonth()
    let dateDay = '0' + date.getDate()
    date = dateYear + '/' + dateMonth + '/' + dateDay
    date.slice(1, 2)
  }

  useEffect(() => {
    setTotal(checkIfDiscount(offers, 0, 0, order))
  }, [offers, order])

  return (
    <li>
      <section>
        <p className='weight-700 white'>#{order[0].orderId}</p>
        <p className='white'>{date ? date : 'Behandlas'}</p>
      </section>
      <section>
        <p className='caption white-transparent'>Summa av order</p>
        {total.discount ? (
          <p className='caption white-transparent'>
            {date ? (
              <Fragment>
                <span className='red'>{total.totalDiscount} Kr</span>{' '}
                <span className='line-small'>{total.total} Kr</span>
              </Fragment>
            ) : (
              <Fragment>
                <span>ETA {order[0].timeLeft} min </span>
                <span className='red'>{total.totalDiscount} Kr</span>{' '}
                <span className='line-small'>{total.total} Kr</span>
              </Fragment>
            )}
          </p>
        ) : (
          <p className='caption white-transparent'>
            {date
              ? ` ${total.total} Kr`
              : `ETA ${order[0].timeLeft} min, ${total.total} Kr`}
          </p>
        )}
      </section>
    </li>
  )
}

export default OrderHistoryList;
