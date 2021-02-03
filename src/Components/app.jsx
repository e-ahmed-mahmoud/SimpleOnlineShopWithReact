import React from "react";
import { Component } from "react";
import { Route, Redirect , Switch } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";

import ShoppingCart from "./ShoppingCart";
import Navbar from "./Navbar";
import Home from "./home";
import About from "./about";
import NotFound from './notfind';
import DetailsProduct from './details';
import AddItem from "./additem";


class App extends Component {
  state = {
    arr:[]
  };

  componentDidMount = async (e) => {
      // fetch("http://localhost:3005/arr").then(async data =>
      //   await data.json().then( async res =>{
      //     //clone state
    
      //     //set state
      //       this.setState({arr : res});
      //   }
      //   )
      // ).catch (async e=>(
      //   await console.log("not finish yet")
      // ))
      const data =await axios.get("http://localhost:3005/arr");
      this.setState({arr:data.data});
  }

  SelectedItem= (product)=>{
    //clone
    const arr= this.state.arr;
    const index = arr.indexOf(product);
    //edit
    arr[index].selected= !arr[index].selected;
    arr[index].count = arr[index].selected ? 1 : 0; 
    //setstate
    this.setState({arr});
    if(this.state.selected=== true)
      axios.patch("http://localhost:3005/arr/"+ product.id,{selected:true});
    else
    axios.patch("http://localhost:3005/arr/"+ product.id,{selected:false});  
  }

  decreaseCounter = (product) => {
    //deep colning
    const products = this.state.arr;
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //edit
    if(products[index].count <=0){
      return ;
    }
    products[index].count--;
    //setstates property
    this.setState({ arr: products });
  };

  increaseCounter = (product) => {
    //deep colning
    const products = this.state.arr;
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //edit
    products[index].count++;
    //setstates property
    this.setState({ arr: products });
  };

  onDelete = (id, rule) => {
    //clone
    toast("Delete Item");
    let arr = this.state.arr;
    const index = arr.indexOf(id);
    arr = this.state.arr.filter((cur) => cur.id !== id);
    if(rule === 'admin'){
      delete arr[index];
      this.setState({ arr });
      axios.delete("http://localhost:3005/arr/"+id).then(console.log("success"));
    }
    else if(rule==='guest'){      
      this.setState({ arr });
    }
  };

  OnReset = () => {
    //clone
    let arr = this.state.arr;
    arr.map((cur) => (cur.count = 0));
    this.setState({ arr });
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer/>
        <Navbar data={this.state.arr.filter((cur) => cur.selected === true).length} />
          <Switch>
            <Route path="/home" render={props=><Home
                key={this.state.arr.id}
                data={this.state.arr}
                SelectedItem = {this.SelectedItem}
                onDelete={this.onDelete}
            />} />
            <Route path="/about" component={About} />
            <Route
            path="/ShoppingCart"
            render={() => (
                <ShoppingCart
                data={this.state.arr}
                OnIncrease={this.increaseCounter}
                OnDecrease={this.decreaseCounter}
                OnDelete={this.onDelete}
                OnReset={this.OnReset}
                {...this.props}
                />
            )}>
            </Route>
            <Route path="/details/:id" render={props => 
            <DetailsProduct
              { ...props}
              data = {this.state.arr}
            />
            } ></Route>
            <Route path="/additem" component={AddItem}></Route>
            <Route path='/notfind' component={NotFound}/>
            <Redirect to="/notfind" />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
