import OrderHistory from '../components/Checkout/OrderHistory'
import Nav from '../components/Nav'
import { useSelector } from 'react-redux'

function Profile() {
  const user = useSelector((state) => state.user)

  return (
    <div className='grid profile'>
      <Nav />
      <div className='user-info'>
        <h2>{user.username}</h2>
        <p>{user.email}</p>
      </div>
      <OrderHistory />
    </div>
  )
}

export default Profile
