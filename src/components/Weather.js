import React from "react";

const Weather = props => (
	<div className="weather">
		{  props.city &&  props.country && <h3>Location: { props.city}, { props.country}</h3>}
		{  props.temperature && <h3>Temperature: { props.temperature}</h3> }
		{  props.humidity && <h3>Humidity: { props.humidity}</h3> }
		{  props.description && <h3>Condition: { props.description}</h3> }
		{  props.error && <p>{ props.error}</p> }
	</div>
	);

export default Weather;