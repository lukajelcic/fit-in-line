import React from 'react';

function Counter() {
    return (
        <div className="counter">
            <p>
                <strong style={{fontSize:'40px'}}>0</strong>
                <i>puta podeljeno</i>
            </p>
            <div className="icons-div">
                <a href="https://www.facebook.com/fit.inline.1" className="fa fa-facebook" id="face"> </a>
                <a href="https://www.instagram.com/fit_inline/?hl=sr" className="fa fa-twitter" id="twitter"> </a>
            </div>
        </div>
    )
}

export default Counter;