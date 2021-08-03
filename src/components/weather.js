import React from "react";

const Weather = ({ weather: { city, country, temp, sunrise, sunset, error } }) =>( 
    <div className="infoWeath">
        {
            city &&
            <div>
                    <p>Location: {city}, {country}</p>
                    <p>Tempherature: {temp}</p>
                    <p>Sunrise: {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Sunset: {new Date(sunset * 1000).toLocaleTimeString('en-IN')}</p>
                </div>
        }
        <p className="error">{error}</p>
    </div>
);
export default Weather;