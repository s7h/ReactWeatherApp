import React from "react";

const Form = props => (
			<form className="login" onSubmit={props.getWeatherDetails}>
				<input type="text" name="city" placeholder="City" autocomplete="off" />
				<input type="text" name="country" placeholder="Country" autocomplete="off" />
				<input type="submit" value="Get Weather Details" className="btn btn-success btn-sm" />
			</form>	
	);

export default Form;