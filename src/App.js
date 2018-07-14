import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "uSeyOurOwnapIkey";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

class App extends React.Component{

	getWeatherFromOWM = async (e) => {
		e.preventDefault();

		var city =  e.target.elements.city.value;
		var country = e.target.elements.country.value;

		var extendedUrl = `?q=${city},${country}&appid=${API_KEY}&units=metric`;

		const response = await fetch(BASE_URL+extendedUrl);
		const data = await response.json();

		console.log(data);
	}

	render(){
		return(
			<div>
				<Titles />
				<Form getWeatherDetails={this.getWeatherFromOWM}/>
				<Weather />
			</div>
		);
	}
}

export default App;