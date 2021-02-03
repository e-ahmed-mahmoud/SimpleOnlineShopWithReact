import React from 'react';

const DetailsProduct = props => {
    const obj = props.data.filter(cur => cur.id === parseInt(props.match.params.id))[0];
    return ( 
        <div className="container">
            <div className="card border">
                    <div className="card-body">
                        <img src={obj.url} alt={obj.name} width="300" className="card-image-top border"/>
                        <h5 className="card-title">Item Name: {obj.name}</h5>
                        <p className="card-text">item price: {obj.price}</p>
                        <p className="card-text">seleted number: {obj.count}</p>
                    </div>
            </div>
        </div>
     );
}
 
export default DetailsProduct;