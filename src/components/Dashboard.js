import React from "react";

const Dashboard = () => {

    //Arrat 1
    let num = [1, 2, 3, 4, 5];


    //Array 2
    let userlist = [

        {
            name: 'harshit',
            email: 'harshit@example.com'
        },

        {
            name: 'harshit',
            email: 'harshit@example.com'
        },

        {
            name: 'harshit',
            email: 'harshit@example.com'
        },

        {
            name: 'harshit',
            email: 'harshit@example.com'
        },

        {
            name: 'harshit',
            email: 'harshit@example.com'
        },

    ]


    let age = 21;

    let status = true;


    //Inside Return all Html codes were written in JSX format. JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It is commonly used in React to define the structure and appearance of components.
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>


            <p>Sum of 5 + 4 {5 + 4}</p>


            <p style={{ color: 'red', fontSize: '30px' }}>Paragraph</p>
            <p style={{ backgroundColor: 'yellowgreen' }}>PARAGRAPH</p>




            <ul>

                {
                    num.map((item) => (
                        <li>{item}</li>
                    ))
                }

            </ul>


            <table>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        userlist.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

            {/*Conditional Rendering Loops IF(&&) or IF ELSE(Ternary)*/}

            {/*IF Statement*/}
            {
                (age > 18) && <h2>Conent is 18+</h2>
            }

            {/*IF ELSE Statement*/}
            {
                (status) ? <h2>Content is true</h2> : <h2>Content is false</h2>
            }

        </div>


    );
};

export default Dashboard;