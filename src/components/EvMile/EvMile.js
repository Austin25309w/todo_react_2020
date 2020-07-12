import React from 'react';


// const MilageCalculation = (props) => {
//     let milage = props.input * 3.3
//     return milage;
// }


class EvMile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: 0
        }
    }

    componentWillUpdate


    handleChange = (e) => {
        this.setState({ input: e.target.value });
        
    }

    milageCalculation = () => {
        let milage = this.state.input * 3.3
        return milage;
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()

    // }
    


render(){
    // const mile = this.state.input;
    return < div className="ev_component">
            <h1>Electric Vehicle Mile calculator</h1>
            <h3>Please enter charging speed in kW/h</h3>
            <form onSubmit= {this.handleSubmit} >
                <input placeholder="Enter charging speed" 
                onChange={this.handleChange}
                className= "item"/>
                {/* <input className ="btn-add-item" type="submit" value="Submit"/> */}
                <div>
                    <h3>Your EV will gain about {parseInt(this.milageCalculation(this.state.input))} miles after charging for 1 hour</h3>
                </div>
            </form>
            
    </div>
}
}

export default EvMile;