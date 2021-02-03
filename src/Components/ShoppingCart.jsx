import React from 'react';
import Product from './Product';


const ShoppingCart = (props) => {

        return ( 
            <React.Fragment >
                <div className="container">
                    <h1 className="d-2 m-4">ShoppingCart</h1>
                        <button className="btn justify-content-end m-2 btn-danger" onClick={props.OnReset}>Reset</button>
                    <hr/>
                        {props.data.map(cur => (cur.selected) ? <Product key={cur.id} 
                        decreaseCounter={props.OnDecrease} 
                        names={cur}  
                        increaseCounter={props.OnIncrease}
                        onDelete = {props.OnDelete} /> : "" )}
                </div>
            </React.Fragment>
         );
}
export default ShoppingCart;