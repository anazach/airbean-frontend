import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setMenu } from '../actions/menuAction'
import { useEffect, useState } from 'react'
import drone from '../style/assets/drone.svg'

function Status() {
  const orderDetails = useSelector((state) => state.orderDetails)
  const menu = useSelector((state) => state.menu)
  const history = useHistory()
  const dispatch = useDispatch()
  const [timeLeft, setTimeLeft] = useState()
  const url = `http://localhost:9999/api/orderId/${orderDetails.orderid}`

  function handleClick() {
    menu.map((item) => {
      return (item.amount = 0)
    })
    dispatch(setMenu(menu))
    history.push('/profile')
  }

  useEffect(() => {
    async function fetchTimeLeft() {
      const response = await fetch(url)
      const data = await response.json()

      if (data[0]) {
        setTimeLeft(data[0][0].timeLeft)
      }
    }
    fetchTimeLeft()
  }, [url])
  return (
    <div className='grid status'>
      <p>
        Ordernummer <b>#{orderDetails.orderid}</b>
      </p>
      <img src={drone} alt='drone' />
      <h1>
        {timeLeft ? 'Din beställing är påväg!' : 'Din beställning är klar!'}
      </h1>
      <h3>
        <b>{timeLeft ? timeLeft : 'Hoppas kaffet smakar!'}</b>
        {timeLeft ? ' Minuter' : ''}
      </h3>
      <button className='status-btn' onClick={handleClick}>Ok cool!</button>
    </div>
  )
}

export default Status;