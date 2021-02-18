import React, { Component } from 'react';
import Demo1 from "./Demo1.js";

class LocationForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
            locEnd: '',
            output: [],
            display: false,
            displayMessage: "The carrier will need customs documentation for the following countries: "
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


    blankUserInput(){
        this.setState({
            displayMessage: "Please enter a country code from the list above"
        })
    }

    updateMessage(){
        this.setState({
            displayMessage: "The carrier will need customs documentation for the following countries: "
        })
    }

    getRoutes() {
        let countries = ["USA", "MEX", "GTM", "HND", "NIC", "CRI", "PAN"];
        let traverse = [];
        //handle Canada edge case
        if( this.state.locEnd == ''){
            this.blankUserInput();
        }
        else if( this.state.locEnd == "CAN" ){
            traverse = ["USA", "CAN"];
            this.updateOutputList(traverse);
            this.updateMessage();
        }
        //handle Belize case
        else if(this.state.locEnd == "BLZ") {
            traverse = ["USA", "MEX", "BLZ"];
            this.updateOutputList(traverse);
            this.updateMessage();
        }
        //handle El Salvador Case
        else if(this.state.locEnd == "SLZ"){
            traverse = ["USA", "MEX", "GTM", "SLZ"];
            this.updateOutputList(traverse);
            this.updateMessage();
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
                    this.updateMessage();
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
        const displayMessage = this.state.displayMessage;
        let message;
        let list;
        if(display){
            message = <h4>{displayMessage}</h4>;
            list = <ol>{outputItems}</ol>;
        }
        return (
            <form className = "locationForm">
                    <label> Destination: </label>
                    <input
                        type = "text" 
                        value = {locEnd} 
                        onChange ={this.handleLocEndChange} 
                        required/>
                    <div>
                    <button onClick={this.handleClick}> Click to get Traversal Path</button>
                    </div>
                    <div className = "userResponse"> 
                    {message} {list} </div>
            </form>
        )
    }
}

export default LocationForm