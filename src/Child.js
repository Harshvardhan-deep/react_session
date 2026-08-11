import React from "react";

const Child = (props) => {

    console.log('Props in Child Component', props);

    <br></br>

    // Destructing props

    const { country, state, pincode, district } = props;

    return (
        <>

            <div style={{ backgroundColor: 'lightgreen', padding: '10px', textAlign: 'left' }}>

                <h3>Child Component & This is a simple child component.</h3>

                <h4>Country - {props.country}</h4>
                <h4>State - {props.state}</h4>
                <h4>Pincode - {props.pincode}</h4>
                <h4>District - {props.district}</h4>

                <br></br>
                <br></br>

                <h4>Country - {country}</h4>
                <h4>State - {state}</h4>
                <h4>Pincode - {pincode}</h4>
                <h4>District - {district}</h4>




            </div>

        </>

    )
}

export default Child;