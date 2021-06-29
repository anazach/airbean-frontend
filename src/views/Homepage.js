// import ImgHeader from '../components/ImgHeader'
import Login from '../components/Login'
import Nav from '../components/Nav'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setMenu, setOffers } from '../actions/menuAction'

function Homepage() {
  const dispatch = useDispatch()

  async function getMenu() {
    const response = await fetch('http://localhost:9999/api/coffee')
    const data = await response.json()
    const offers = await data.offers.map((item) => {
      item.amount = 0
      return item
    })
    const menu = await data.menu.map((item) => {
      item.amount = 0
      return item
    })
    dispatch(setMenu(menu))
    dispatch(setOffers(offers))
  }
  useEffect(() => {
    getMenu()
  })
  
  return (
    <div className='grid'>
      <nav>
        <Nav />
      </nav>
      <Login />
    </div>
  )
}

export default Homepage