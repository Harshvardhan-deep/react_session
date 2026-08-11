import React from "react";
import Child from "./Child";

const Parent = () => {

    let district = "SOUTH DELHI";

    return (
        <>

            <div style={{ backgroundColor: 'lightblue', padding: '30px', textAlign: 'center', Margin: '20px' }}>
                <h1>Parent Component</h1>

                <Child country="INDIA" state="DELHI" pincode="110001" district={district} />


            </div>
        </>
    )
}

export default Parent;