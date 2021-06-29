import Nav from '../components/Nav'
import MenuItem from '../components/MenuItem'
import CartBtn from '../components/Checkout/CartBtn'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function Menu() {
  const menu = useSelector((state) => state.menu)
  const [rerender, setRerender] = useState(true)
  function update() {
    setRerender(!rerender)
  }


  return (
    <div className='grid menu'>
      <Nav />
      <CartBtn />
      <h1>Meny</h1>
      <ul className='menu-list'>
        {menu.map((item) => {
          return <MenuItem key={item.id} item={item} update={update} />
        })}
      </ul>
    </div>
    
  )
}

export default Menu




// import Header from '../components/Header'
// import bag from '../assets/bag.png'
// import add from '../assets/add.png'
// import '../styles/menu.css'
// import Footer from '../components/Footer'
// import navicon from '../assets/navicon.png'
// import { useDispatch, useSelector } from 'react-redux'
// import { useEffect, useState } from 'react'
// import MenuItem from '../components/MenuItem'
// import actions from '../actions/orderActions'
// // import AddOrder from "../components/AddOrder";
// import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// // import Cart from '../components/Cart';

// function Menu() {
//   const menu = useSelector((state) => {
//     return state.menu
//   })
//   const currentOrder = useSelector((state) => {
//     return state.order
//   })
//   const [order, setOrder] = useState('')
//   const [cart, setCart] = useState('')
//   const [selection, setSelection] = useState('')
//   const dispatch = useDispatch()

//   useEffect(() => {
//     async function getMenu() {
//       //let menuItemsMap = new Map();
//       const response = await fetch('http://localhost:8000/api/coffee')
//       const data = await response.json()
//       // This is to extract each menu item id and their price, title and desc
//       // This makes it easier to reference total calculation and the cart display easy
//       // The final format will be {id => {price, title, desc}}
//       console.log('getMenu', data)
//       dispatch(actions.getMenu(data))
//     }
//     getMenu()
//   }, [dispatch])

//   const history = useHistory()

//   function inputChange({ target }) {
//     setSelection(target.value)
//   }

//   function addToOrder(id) {
//     currentOrder.push(id)
//     setOrder(currentOrder)
//   }

//   function renderCart() {
//     let menuItemsMap = {}
//     // read order array - this is currentOrder
//     // read menuItemsMap  - this is menuItems
//     // extract totals and price total from menu items map and order array
//     // calculate running total
//     menu.forEach((item) => {
//       let menuItem = { price: item.price, desc: item.desc, title: item.title }
//       console.log(menuItem)
//       menuItemsMap[item.id] = menuItem
//     })
//     let cart = {}
//     cart['total'] = 0
//     cart['items'] = []
//     let i
//     for (i = 0; i < order.length; i++) {
//       let selection = order[i]
//       if (cart['items'][selection]) {
//         cart['items'][selection]['count']++
//       } else {
//         cart['items'][selection] = {
//           price: menuItemsMap[selection].price,
//           desc: menuItemsMap[selection].desc,
//           title: menuItemsMap[selection].title,
//           count: 1
//         }
//       }
//       cart['total'] += menuItemsMap[selection].price
//     }
//     // setCart(cart)
//     console.log('cart: ' + JSON.stringify(cart))
//     console.log('ordertotal: ' + cart['total'])
//     dispatch(actions.setCart(cart))
//   }

//   return (
//     <section className='menu-app'>
//       <article>
//         <Header />

//         <Link to='/Navbar'>
//           <img id='navicon1' src={navicon} alt='Logo' />
//         </Link>

//         <Link id='' to='/Cart'>
//           <img id='bag1' src={bag} alt='add to cart' />
//         </Link>

//         <h1 id='menutag'>Meny</h1>

//         <ul id='menumapping'>
//           {menu.map((menulist, index) => {
//             return (
//               <MenuItem
//                 tasks={
//                   <img
//                     role='button'
//                     onClick={() => addToOrder(menulist.id)}
//                     id={menulist.id}
//                     src={add}
//                     alt='add to product'
//                   />
//                 }
//                 task1={menulist.title}
//                 task2={menulist.desc}
//                 task3={menulist.price}
//                 key={index}
//               />
//             )
//           })}
//         </ul>
//       </article>
//       {renderCart()}
//       <Footer />
//     </section>
//   )
// }

// export default Menu




// import { useEffect, useState } from 'react'
// import CartBtn from '../components/CartBtn'
// import Nav from '../components/Nav'
// import MenuItem from '../components/MenuItem'
// // import { useDispatch } from 'react-redux'

// import { setMenu } from '../actions/menuActions'
// // import ViewCart from './Checkout/Cart/viewCart'
// // import Products from './Checkout/Products/products'

// function Menu() {
//   // const [open, setOpen] = useState(false)

//   const [menu, setMenu] = useState()
//   const [menuLoaded, setMenuLoaded] = useState(false)
//   // const dispatch = useDispatch()

//   function addItemToCart(value) {
//     console.log(value)
//     // dispatch(addToCart(value)) 
//   }

//   const fetchMenu = async () => {
//     try {
//       let response = await fetch('http://localhost:9999/api/coffee')
//       let json = await response.json()
//       return { success: true, data: json }
//     } catch (error) {
//       console.log(error)
//       return { success: false }
//     }
//   }
//   useEffect(() => {
//     ;(async () => {
//       setMenuLoaded(false)
//       let res = await fetchMenu()
//       if (res.success) {
//         // console.log(res.data.menu)
//         setMenu(res.data.menu)
//         setMenuLoaded(true)
//       }
//     })()
//   }, [])
//   return (
//     <section className='grid menu'>
//       <h1>Meny</h1>
//       <Nav />
//       <CartBtn />
//       <
//       {menuLoaded ? (
//         <table className='menu-list'>
//           <tbody>
//             {menu.map((titleItem, index) => (
//               <tr key={index}>
//                 <td>
//                   <button
//                     onClick={() => addItemToCart(titleItem)}
//                     key={titleItem.id}
//                     className='button'
//                   >
//                     +
//                   </button>
//                 </td>
//                 <td colSpan='2'>
//                   {titleItem.title}
//                   <br></br>
//                   {titleItem.desc}
//                 </td>
//                 <td>{titleItem.price} kr</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>The menu was not available, please try again later.</p>
//       )}
//     </section>
//   )
// }

// export default Menu;





