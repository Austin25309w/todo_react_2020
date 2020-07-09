import React from 'react';
// import ReactDOM from 'react-dom';


class List extends React.Component {
    
    state = {
        edit: false,
        items: [
            {
            id: '1', title: 'Buy Milk', done: false, date: new Date()},
            {id: '2', title: 'Meeting with Ali', done: false, date: new Date()},
            {id: '3', title: 'Tea break', done: false, date: new Date()},
            {id: '4', title: 'Go for a run.', done: false, date: new Date()},
        ],
        inputVal : '', 
        id: null
    };
    
    // add() {
    //     const {items, inputVal} = this.state;
    //     if(inputVal){
    //         const nextState = [...items, inputVal]
    //         this.setState({ items: nextState, inputVal: ''})
    //     }
    //     this.setState({
    //         items: []
    //     })
    // }

    
    // submitHandler = (e) => {
    //     e.preventDefault();

    // } 

    
    onEditHandle(e){
        
    }
    
    onDeleteHandle(e){
        
    }

    onSubmitHandle(e){
        e.preventDefault();
        this.setState({
            items: [...this.state.items, { id: Date.now(), title: e.target.item.value, done: false, date: new Date()}]
        });
        e.target.item.value = '';
    }
    render(){
        // const {inputVal} = this.state;
    return (
        <div>
            <form onSubmit={this.onSubmitHandle.bind(this)}>
                <input type="text" name="item" className="item"/>
                <button className="btn-add-item">Add Item</button>
            </form>
            <ul style ={{ listStyleType: "none"}}>
                {this.state.items.map(item => (
                    <li key={item.id}>{item.title}
                        <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button> 
                        <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>
                        <button onClick={this.onCompleteHandle}>Complete</button>
                    </li>
                ))}
            </ul>

        </div>
    )
    }
}

export default List;