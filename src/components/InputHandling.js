import React from "react";

const InputHandling = () => {

    /*const [name, setName] = useState('');
    const [city, setCity] = useState('');*/

    const submitfn = () => {
        console.log('name', 'city');
    }

    const changeHandler = (event) => {
        console.log(event.target.value);
    }

    return (
        <>
            <h2> Form / Input HAndlinggg.....</h2>

            <div style={{ background: 'lightpink' }}>
                <br></br>
                Name: <input type="text" name="" onChange={changeHandler} />
                <br></br>
                City: <input type="text" name="" onChange={changeHandler} />
                <br></br>

                <button onClick={submitfn}>Submit</button>
            </div>
        </>
    )
}

export default InputHandling;