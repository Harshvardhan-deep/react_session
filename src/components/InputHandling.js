import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ChangeEvent } from 'react';


const InputHandling = () => {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const submitfn = () => {
        console.log('name & city', name, city);
    }

    const changeHandler = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    const changeHandler1 = (event) => {
        console.log(event.target.value);
        setCity(event.target.value);
    }

    //componentDidMount + componentDidUpdate
    useEffect(() => {
        console.log('USEEFFECT TIGGER (EveryTime).....');
    })

    //componentDidMount
    useEffect(() => {
        console.log('USEEFFECT TIGGER (didmount).....');
    }, [])

    //componentWillUnmount
    useEffect(() => {
        console.log('USEEFFECT TIGGER (willunmount).....');
    }, [])

    //componentDidUpdate on Condition
    useEffect(() => {
        console.log('USEEFFECT TIGGER (condition).....');
    }, [name])

    //componentDidUpdate on Condition
    useEffect(() => {
        console.log(name, city);
    }, [name, city])

    return (
        <>
            <h2> Form / Input HAndlinggg.....</h2>

            <div style={{ background: 'lightpink' }}>
                <br></br>
                Name: <input type="text" name="" onChange={changeHandler} />
                {/*Name: <input type="text" name="" onBlur={changeHandler} />*/}
                <br></br>
                City: <input type="text" name="" onChange={changeHandler1} />

                <br></br>
                <br></br>

                <button onClick={submitfn}>Submit</button>

                <br></br>
                <br></br>

                <div style={{ backgroundColor: 'yellow', padding: '10px' }} >Submitted Data... {name} & {city}</div>

                <br></br>

            </div>
        </>
    )
}

export default InputHandling;