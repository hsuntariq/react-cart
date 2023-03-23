import React from 'react'
import { UseGlobalContext } from './Context'
import Nav from './Nav';
const Cart = () => {
    const { data,add } = UseGlobalContext();
return (
    <>
    <Nav/>
        <div className="row d-flex justify-content-center align-items-center">
            {data.map((item) => {
                return(
                    <>
                        <div key={item.id} className="col-md-3 col-sm-6 mb-2">
                            <img style={{width:'200px',height:'200px',objectFit:'cover'}} src={item.image} alt="" />
                            <h3>{item.name}</h3>
                            <p className="text-secondary text-justify">
                                {item.info}
                            </p>
                            <button onClick={()=>add(item.id)} className="btn btn-dark w-100">
                                Buy
                            </button>
                        </div>
                    </>
                )
            })}
        </div>
    </>
)
}

export default Cart
