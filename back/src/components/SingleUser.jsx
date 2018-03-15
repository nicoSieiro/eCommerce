import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user, handleSubmit }) =>{
  if (!user.id) return <h3>Loading</h3>
  return (
    <div>
      <button onClick={handleSubmit}>Deslogearse</button>
      <h1>{user.firstName}</h1>
      <div>
      <h2>{user.email}</h2>
      <div>  
        <Link to={`/user/orders`}>
          <img src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1342761/580/386/m1/fpnw/wm0/cardboard-box-icon-01-.jpg?1465234338&s=ce34fb8219c58b48a7e22f2840e4e35e"/>
          <h3>Mis ordenes</h3>
        </Link>
      </div>

      <div>  
        <Link to='/carrito'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmUmvGdHJoUn7OdpAMkYsW1Wc8ELK_kLnmoG_Lys7C1ACILZEqQ"/>
          <h3>Carro de compras</h3>
        </Link>
      </div>
      </div>
    </div>
  )
}
