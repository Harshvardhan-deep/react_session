import React, { useState } from 'react';

const Statefn = () => {

    // let num = 0;
    //syntax to create a state variable
    const [count, setCount] = useState(0);
    //usestate is a hook to create a state variable
    //count is state variable and usecount is function to update that state variable
    //usestate return an array from which we can destructing variable and function to update that variable
    //count can be just updated by setcount function or nothin else
    //setcount can not update anything else
    //name and fn can be anything
    //value passed as parameter to usestate defines the data type of that state variable    
    //setcount works in asynchronous way 

    const increaseFn = () => {
        console.log('INCREMENT...');
        //console.log('Before Increment', num);
        //num = num + 1;
        setCount(count => count + 1);
        //console.log('After Increment', num);
    }

    const decreaseFn = () => {
        console.log('DECREMENT...');
        //console.log('Before Decrement', num);
        //num = num - 1;
        setCount(count => count - 1);
        //console.log('After Decrement', num);
    }



    return (
        <>
            <h2 id='numdisplay'>Functional Component - State Variable</h2>

            <div style={{ textAlign: 'center', backgroundColor: 'lightgreen', padding: '6px' }}>

                <h3>NUM - {count}</h3>

                <br></br>

                <button onClick={increaseFn}>INCREMENT</button>
                <button onClick={decreaseFn}>DECREMENT</button>

            </div>

            <div>

            </div>

        </>

    )

}



export default Statefn;