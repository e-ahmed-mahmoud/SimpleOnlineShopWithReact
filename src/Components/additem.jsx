import React, { Component } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

class AddItem extends Component {
    state = { name:'' , price:0, count:0 }

    onChange =(e) =>{
        this.setState({ [e.currentTarget.name]: e.currentTarget.value});
        console.log(this.state);
    }

    validat = ()=>{
        console.log(this.state);
        if(this.state.name.trim() && this.state.name === ''){
            console.log('empty');
            return null;
        }
        try{
        if(isNaN(parseInt(this.state.count)) || isNaN(parseFloat(this.state.price)) ||parseFloat(this.state.price)===0 || parseInt(this.state.count)===0 ){
            console.log('emity nums');
            return null;
        }
    }
        catch{
            console.log('convert error');
            return null;
        }
        return true; 
    }

    onSubmit = async (e)=>{
        e.preventDefault();
        if(this.validat() === null){
            console.log("invild submit");
            return;
        }
        const obj = {...this.state,selected:false , url:"" }
        toast.success("adding Item successfully");
        await axios.post("http://localhost:3005/arr", obj);
        this.props.history.replace('/home');
    }


    render() { 
        return ( 
            <div className="container">
                <form className=" m-5">
                    <div className="form-group">
                        <label htmlFor="name" className= "font-weight-bold">Item Name </label>
                        <input className="form-control" name={Object.keys(this.state)[0]} onChange={this.onChange} id="name" type="textbox"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price" className= "font-weight-bold" >Price</label>
                        <input className="form-control" id="price" type="textbox" name={Object.keys(this.state)[1]} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quanity" className= "font-weight-bold" >Count </label>
                        <input className="form-control" id="quanity" type="textbox" name={Object.keys(this.state)[2]} onChange={this.onChange}/>
                    </div>
                </form>
                <button type="submit" onClick={this.onSubmit} className="btn btn-success mx-5 ">save</button>
            </div>
        );
    }
}
 
export default AddItem;