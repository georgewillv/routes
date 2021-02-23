import React, { Component } from 'react';

class LocationForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            destination: "CAN",
            output: [],
            display: false,
            displayMessage: ""
        }

        this.handleSelectChange.bind(this);
        this.handleClick.bind(this);
    }

    /*Class Property */
    /*When you handle an on change event, the event itself is passed as a parameter to the handler */
    handleSelectChange = (event) => {
        this.setState({
            destination: event.target.value,
            display: false //This line resets message display to false after the traversal button has been clicked. 
        });
        
    }

    handleDisplayChange = () => {
        this.setState({
            display: true
        });
    }

    updateOutputList(array) {
        this.setState({
            output: array
        });
    }

    handleMessage() {
        if(this.state.destination == "USA"){
            this.setState({
                displayMessage: "The Carrier should not need any customs documenation if they are traversing through the United States"
            });
        }
        else {
            this.setState({
                displayMessage: " the carrier will need customs documentation for the following countries: "
            });
        }
    }

    handleClick = (event) => {
        this.getRoutes();
        this.handleDisplayChange();
        /* line below prevents form data from being dropped on submit */
        event.preventDefault();
    }

    getRoutes() {
        var countries = ["USA", "MEX", "GTM", "HND", "NIC", "CRI", "PAN"];
        var traverse = [];
        //handle Canada edge case
        if (this.state.destination == "CAN") {
            traverse = ["USA", "CAN"];
            this.updateOutputList(traverse);
            this.handleMessage();
        }
        //handle Belize case
        else if (this.state.destination == "BLZ") {
            traverse = ["USA", "MEX", "BLZ"];
            this.updateOutputList(traverse);
            this.handleMessage();
        }
        //handle El Salvador Case
        else if (this.state.destination == "SLZ") {
            traverse = ["USA", "MEX", "GTM", "SLZ"];
            this.updateOutputList(traverse);
            this.handleMessage();
        }
        //the rest can be processed via a loop
        else {
            for (var i = 0; i < countries.length; i++) {
                if (this.state.destination !== countries[i]) {
                    traverse.push(countries[i]);
                }
                if (this.state.destination == countries[i]) {
                    traverse.push(countries[i]);
                    this.updateOutputList(traverse);
                    this.handleMessage();
                    break;
                }
            }
        }
    }


    render() {
        const country_code_to_country = {
            CAN: "Canada (CAN)",
            USA: "United States (USA)",
            MEX: "Mexico (MEX)",
            BLZ: "Belize (BLZ)",
            GTM: "Guatemala (GTM)",
            SLZ: "El Salvador (SLZ)",
            HND: "Honduras (HND)",
            NIC: "Nicaragua (NIC)",
            CRI: "Costa Rica (CRI)",
            PAN: "Panama (PAN)"
        };

        const destination = this.state.destination;
        const display = this.state.display;
        const output = this.state.output;
        const outputItems = output.map(output => <li key={output.toString()}>{output}</li>);
        const displayMessage = this.state.displayMessage;
        let message;
        let list;

        if(display && destination !== "USA") {
            message = <h4> To go from the United States (USA) to {country_code_to_country[destination]}, {displayMessage}</h4>;
            list = <ol>{outputItems}</ol>;
        }
        else if(display && destination == "USA"){
            message = <h4>{displayMessage} </h4>;
            list = <ol>{outputItems}</ol>;
        }

        
        return (
            <form className="locationForm" >
                <label> Destination:
                    <select destination = {this.state.destination} onChange= {this.handleSelectChange}>
                        <option destination = "CAN">CAN</option>
                        <option destination = "USA">USA</option>
                        <option destination = "MEX">MEX</option>
                        <option destination = "BLZ">BLZ</option>
                        <option destination = "GTM">GTM</option>
                        <option destination = "SLZ">SLZ</option>
                        <option destination = "HND">HND</option>
                        <option destination = "NIC">NIC</option>
                        <option destination = "CRI">CRI</option>
                        <option destination = "PAN">PAN</option>
                    </select>
                </label>
                <div>
                    <button onClick={this.handleClick}> Click to get Traversal Path</button>
                </div>
                <div className = "userResponse">
                    {message}
                </div>
                <div className = "requestedOutput">
                    {list} 
                </div>
            </form>
        )
    }
}

export default LocationForm