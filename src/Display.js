import React, { Component } from 'react';
import DateTime from './lib/DateTime';

const Display = (props) => (
    <div>
        <div>
           {DateTime.timeString(props.date)}
        </div>
        <div>
            {props.dateOn && DateTime.dateString(props.date)}
        </div>
    </div>
)

export default Display;