import { useDispatch } from 'react-redux'
import { setUser } from '../actions/menuAction'
import { useHistory } from 'react-router-dom'
import Input from './Input'

function LoginForm() {
  const dispatch = useDispatch()
  const history = useHistory()
  let user = {
    username: '',
    email: ''
  }
  function updateUsername(username) {
    user.username = username
  }
  function updateEmail(email) {
    user.email = email
  }
  async function getUser() {
    const response = await fetch('http://localhost:9999/api/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()
    dispatch(setUser(data.user))
    if (!data.user.error) {
      history.push('/menu')
    } else {
      alert(data.user.error)
    }
  }
  return (
    <div className='login-form flex'>
      <div className='login-text'>
        <h1>Välkommen till AirBean-familjen!</h1>
        <p>
          Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
        </p>
      </div>
      <Input type='text' id='Namn' update={updateUsername} />
      <Input type='email' id='Email' update={updateEmail} />
      <p className='GDPR'>GDPR Ok</p>
      <button className='login-btn' onClick={getUser}>
        Logga in
      </button>
    </div>
  )
}

export default LoginForm