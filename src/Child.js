import React from "react";

const Child = (props) => {

    console.log('Props in Child Component', props);
    return (
        <>

            <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>

                <h2>Child Component & This is a simple child component.</h2>

                <h4>Country: {props.country}</h4>
                <h4>State: {props.state}</h4>
                <h4>Pincode: {props.pincode}</h4>
                <h4>District: {props.district}</h4>

            </div>

        </>

    )
}

export default Child;