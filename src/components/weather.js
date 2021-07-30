import React from "react";

const Weather = props =>( 
    <div>
        {
            props.city &&
            <div>
                    <p>Location: {props.city}, {props.country}</p>
                    <p>Tempherature: {props.temp}</p>
                    <p>Sunrise: {new Date(props.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Sunset: {new Date(props.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                </div>
        }
        <p>{props.error}</p>
    </div>
);
export default Weather;