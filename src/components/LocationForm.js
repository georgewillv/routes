import React, { Component } from 'react';

class LocationForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
            locStart: ''
        }
    }

    /*Class Property */
    /*When you handle an on change event, the event itself is passed as a parameter to the handler */
    handleLocStartChange = (event) => {
        this.setState({
            locStart: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.locStart}`)

        /* line below prevents form data from being dropped on submit */
        event.preventDefault()
    }
    /*if you wanted to use an OnClick Event you could:
     create a button,
     create an OnClick Event handler on the button,
     and have the exact same body as the OnSubmit event.

     However, since 'type="submit"' in our form below, this allows the user to submit forms by hitting the enter key.
     In the interest of User Experience. I think this is better */

    render(){
        const {locStart} = this.state
        return (
            <form onSubmit = {this.handleSubmit}>
                    <label> LocationStart </label>
                    <input 
                        type = "text" 
                        value = {locStart} 
                        onChange ={this.handleLocStartChange} 
                        required/>
                    <div>
                    <button type = "submit"> Click to get Traversal Path</button>
                    </div>
            </form>
        )
    }
}

export default LocationForm