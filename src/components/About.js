import React, { Fragment } from 'react'

const About = () => {

    return (

        //Fragment is a component that allows you to group multiple elements without adding an extra node to the DOM. It is useful when you want to return multiple elements from a component without wrapping them in a parent element like a <div> or <span>. By using Fragment, you can avoid unnecessary nesting and keep your component structure clean.

        <Fragment>

            <div style={{ textAlign: 'center', marginTop: '30px', backgroundColor: 'lightblue', padding: '8px', borderRadius: '10px' }}>
                <h1>About</h1>
                <span>This is the about page of our application.</span>
            </div>

            <div>
                <h2>Hello, Mr Harsh!!</h2>
            </div>

        </Fragment>


    )

}

export default About