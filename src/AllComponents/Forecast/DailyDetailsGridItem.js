import React from 'react';
import './Forecast.css'

const GridItem = (props) => {
    return (
        <div className="daily-details-grid-item">
            <label>{props.detail}</label>
            <label>{props.value} {props.units}</label>
        </div>
    )
}

export default GridItem
