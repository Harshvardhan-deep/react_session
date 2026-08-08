import React from "react";
import Child from "./Child";

const Parent = () => {

    let district = "SOUTH DELHI";

    return (
        <>

            <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
                <h2>Parent Component</h2>

                <Child country="INDIA" state="DELHI" pincode="110001" district={district} />


            </div>
        </>
    )
}

export default Parent;