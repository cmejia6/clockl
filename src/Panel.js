import React, { Component } from 'react';

const Panel = (props) => {
        return(
            <div>
                <input type='checkbox' onChange={props.toggleDate}/>
            </div>
        )
}

export default Panel;