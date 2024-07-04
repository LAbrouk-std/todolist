import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Text({label}) {
    return (
        <div>
            <input type="text" placeholder={label}></input>
        </div>
    );
}
export default Text;