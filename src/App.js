import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "uSeyOurOwnapIkey";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

class App extends React.Component{
	state = {
		temperature : undefined,
		city : undefined,
		country : undefined,
		humidity : undefined,
		description : undefined,
		error : undefined
	}

	getWeatherFromOWM = async (e) => {
		e.preventDefault();

		var city =  e.target.elements.city.value;
		var country = e.target.elements.country.value;

		var extendedUrl = `?q=${city},${country}&appid=${API_KEY}&units=metric`;

		const response = await fetch(BASE_URL+extendedUrl);
		const data = await response.json();

		if(city && country)
		{
			this.setState({
			temperature : data.main.temp,
			city : data.name,
			country : data.sys.country,
			humidity : data.main.humidity,
			description : data.weather[0].description,
			error : "", 
			});
		}
		else
		{
			this.setState({
			error : "Please fill out the values", 
			});	
		}
	}

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-md-offset-4 titles">
						<Titles />
					</div>
				</div>
				<div className="row">
					<div className="col-md-5 col-md-offset-3">
						<Form getWeatherDetails={this.getWeatherFromOWM}/>
						<Weather 
							temperature={this.state.temperature}
							city={this.state.city}
							country = {this.state.country}
							humidity = {this.state.humidity}
							description = {this.state.humidity}
							error = {this.state.error}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;