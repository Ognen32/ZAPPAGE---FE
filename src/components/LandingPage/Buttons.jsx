import React from 'react';

function Buttons (props) {
    return (
        <div className="button-div">
            <input type="button" className='blue' value={props.first} />
            <input type="button" className='red' value={props.second} onClick={props.toggleLoginForm} />
        </div>
    );
}

export default Buttons;