import React from "react";

const Weather = props => (
	<div className="cls-Weather">
		{  props.city &&  props.country && <p><h1>Location: { props.city}, { props.country}</h1></p> }
		{  props.temperature && <p><h1>Temperature: { props.temperature}</h1></p> }
		{  props.humidity && <p><h1>Humidity: { props.humidity}</h1></p> }
		{  props.description && <p><h1>Condition: { props.description}</h1></p> }
		{  props.error && <p>{ props.error}</p> }
	</div>
	);

export default Weather;