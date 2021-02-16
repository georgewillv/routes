import React, { Component } from 'react';
import Demo1 from "./Demo1.js";

class LocationForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
            locEnd: '',
            output: ['USA'],
            display: false
        }
    }

    /*Class Property */
    /*When you handle an on change event, the event itself is passed as a parameter to the handler */
    handleLocEndChange = (event) => {
        this.setState({
            locEnd: event.target.value,
        })
    }

    handleDisplayChange = (event) => {
        this.setState({
            display: true
        })
    }

    updateOutputList(){

    }

    getRoutes() {
        let countries = ["USA", "MEX", "GTM", "HND", "NIC", "CRI", "PAN"]
        //handle Canada edge case
        if( this.state.locEnd == "CAN" ){
            console.log("USA -> CAN");
        }
        //handle Belize case
        else if(this.state.locEnd == "BLZ") {
            console.log("USA -> MEX -> BLZ");
        }
        //handle El Salvador Case
        else if(this.state.locEnd == "SLZ"){
            console.log("USA -> MEX -> GTM -> SLZ");
        }
        //the rest can be processed via a loop
        else {
            for(var i = 0; i < countries.length; i++){
                if( this.state.locEnd != countries[i] ) {
                    console.log(countries[i] + "-> ");
                }
                if (this.state.locEnd == countries[i] ){
                    console.log(this.state.locEnd);
                    break;
                }
            }
        }

    }

    handleClick = (event) => {
        //alert(`${this.state.locEnd}`)
        this.getRoutes();
        this.handleDisplayChange();
        /* line below prevents form data from being dropped on submit */
        event.preventDefault()

    }
    render(){
        const {locEnd} = this.state;
        const display = this.state.display;
        const output = this.state.output

        let list;
        if(display){
            list = <ul>output </ul>
        }
        return (
            <form>
                    <label> LocationStart </label>
                    <input 
                        type = "text" 
                        value = {locEnd} 
                        onChange ={this.handleLocEndChange} 
                        required/>
                    <div>
                    <button onClick={this.handleClick}> Click to get Traversal Path</button>
                    </div>
                    {list}
            </form>
        )
    }
}

export default LocationForm