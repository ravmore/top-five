import React from 'react';
import axios from 'axios';

const auth = () => {
  axios.get('http://localhost:8080/spotify/auth')
    .then(({data}) => console.log(data));
}

const Landing = props => (
	<div>
		Top Five
	</div>
);

export default Landing;