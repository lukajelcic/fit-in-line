import React from 'react';

import './gallery.css'

class Popup extends React.Component{
    render(){
        return(
            <div className="popupParent">
                <div className="popupImage">
                    <text
                    className="imageClosingButton"
                    onClick={this.props.closePopup}
                    >
                        Close
                    </text>

                    <img src={this.props.popImageUrl} alt="/"></img>
                </div>
            </div>
        )
    }
}

export default Popup;