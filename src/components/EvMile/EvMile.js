import React from 'react';

class EvMile extends React.Component {

render(){
    return <div className="ev_component">
        <div>

            <h1>EV charging speed</h1>
            <input placeholder="Enter charging speeed"></input>
            <button>Convert to miles</button>
        </div>
    </div>
}
}

export default EvMile;