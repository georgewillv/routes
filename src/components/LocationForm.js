import React, { Component } from 'react';
import Demo1 from "./Demo1.js";

class LocationForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
            locEnd: '',
            output: [],
            display: false
        }
    }

    /*Class Property */
    /*When you handle an on change event, the event itself is passed as a parameter to the handler */
    handleLocEndChange = (event) => {
        this.setState({
            locEnd: event.target.value.toLocaleUpperCase(),
        })
    }

    handleDisplayChange = (event) => {
        this.setState({
            display: true
        })
    }

    updateOutputList(array){
        this.setState({
            output: array
        })
    }

    getRoutes() {
        let countries = ["USA", "MEX", "GTM", "HND", "NIC", "CRI", "PAN"];
        let traverse = [];
        //handle Canada edge case
        if( this.state.locEnd == "CAN" ){
            traverse = ["USA", "CAN"];
            this.updateOutputList(traverse);

        }
        //handle Belize case
        else if(this.state.locEnd == "BLZ") {
            traverse = ["USA", "MEX", "BLZ"];
            this.updateOutputList(traverse);

        }
        //handle El Salvador Case
        else if(this.state.locEnd == "SLZ"){
            traverse = ["USA", "MEX", "GTM", "SLZ"];
            this.updateOutputList(traverse);
        }
        //the rest can be processed via a loop
        else {
            for(var i = 0; i < countries.length; i++){
                if( this.state.locEnd != countries[i] ) {
                    traverse.push(countries[i]);
                }
                if (this.state.locEnd == countries[i] ){
                    traverse.push(this.state.locEnd);
                    this.updateOutputList(traverse);
                    break;
                }
            }
        }

    }

    handleClick = (event) => {
        this.getRoutes();
        this.handleDisplayChange();
        /* line below prevents form data from being dropped on submit */
        event.preventDefault();

    }
    render(){
        const {locEnd} = this.state;
        const display = this.state.display;
        const output = this.state.output;
        const outputItems = output.map(output => <li key = {output.toString()}>{output}</li>);
        //const {output} = this.state.output; //<--- this breaks program

        let list = [];
        if(display){
            list = <ol>{outputItems}</ol>;
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