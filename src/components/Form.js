import React from "react";

const Form = props => (
		<form onSubmit={props.getWeatherDetails} className="form-row align-items-center">
				<input className="form-control" type="text" name="city" placeholder="City" /> <br />
				<input className="form-control" type="text" name="country" placeholder="Country" /> <br />
				<button class="btn btn-success">Get Weather Details</button>
		</form>			
	);

export default Form;