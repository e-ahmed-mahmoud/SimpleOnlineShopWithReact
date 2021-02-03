import React from 'react';  
import { Component } from 'react'; 
import { Link } from 'react-router-dom';


import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

class Product extends Component {
    // constructor(){
    //     super();
    //     this.increaseCounter= this.increaseCounter.bind(this);
    // }
    //state = { name:this.props.names.name , count: this.props.names.count }

    countStyle = () =>  this.props.names.count <= 0 ? "badge border m-2 bg-warning" : "badge border m-2 bg-primary";

    render() { 
       
        return (
        <div className="container row">
            <div className="col-4 m-2">
                <Link to={`details/${this.props.names.id}`} className="display-5 border text-danger font-weight-bold m-2 justify-content-center" > 
                {this.props.names.name} </Link> 
            </div>
            <div className="col-5 m-2">
                <span className={this.countStyle()} id="counter"> {this.props.names.count}</span>
                <button className="btn btn-primary m-1" onClick={() => this.props.increaseCounter(this.props.names)}>+</button>
                <button className="btn btn-primary m-1" onClick={() => this.props.decreaseCounter(this.props.names)}>-</button>
             </div>
             <div className="col-2 m-2">
                <span onClick={()=> this.props.onDelete(this.props.names.id,'guest') } style={{cursor: 'pointer'}}>
                     <i className="fas fa-trash border m-2" ></i></span>
            </div>
            <hr/>
        </div>
        );}
}
 
export default Product;