function CartItems({ title, price, amount, update }) {
  return (
    <li>
      <section>
        <h2>{title}</h2>
        <div className='amount'>
          <button
           
            alt='arrow'
            onClick={() => {
              update('INCREMENT', title)
            }}
          />
          <p>{amount}</p>
          <button
         
            alt='arrow'
            className='arrow-down'
            onClick={() => {
              update('DECREMENT', title)
            }}
          />
        </div>
      </section>
      <p>{price} Kr</p>
    </li>
  )
}

export default CartItems;
