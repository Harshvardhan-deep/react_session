import React, { useState } from "react";


const ShowHidefn = () => {

    //let status = true;

    const [status, setStatus] = useState(true);

    const ShowContentFn = () => {
        console.log('SHOW CONTENT...');
        setStatus(true);
    }

    const HideContentFn = () => {
        console.log('HIDE CONTENT...');
        setStatus(false);
    }

    return (
        <>

            <h2>Show Hide Implementation</h2>

            <button onClick={ShowContentFn}>SHOW</button>
            <button onClick={HideContentFn}>HIDE</button>

            <br></br>

            {
                status && <div id='content' style={{ textAlign: 'left', backgroundColor: 'lightblue' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
                </div>
            }


        </>

    )
}

export default ShowHidefn;