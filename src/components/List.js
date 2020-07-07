import React from 'react';

function List(props) {
    const items = [];
    const submitHandler = (e) =>{
        e.preventDefault();

    } 
    return <>
    <form onSubmit ={submitHandler}> 
        <input ></input>
        <button >Add an Item</button>
    </form>
    </>
}

export default List;