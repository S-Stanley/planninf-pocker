import React from 'react';
import Http from './http/Http';
import { useNavigate } from 'react-router-dom';

function App() {

	const [personalToken, setPersonalToken] = React.useState<string>('');
	const [usernameBasicAuth, setUsernameBasicAuth] = React.useState<string>('');
	const [passwordBasicAuth, setPasswordBasicAuth] = React.useState<string>('');

	const navigate = useNavigate();

	const getData = async() => {
		const req = await Http.data.getData(personalToken, usernameBasicAuth, passwordBasicAuth);
		if (!req)
			return ;
		navigate('/pocker', {
			state: {
				data: req,
			}
		})
	}

	return (
		<div>
			<div>
				<div>
					<label>Personal Token :</label>
					<input value={personalToken} onChange={(e) => setPersonalToken(e.target.value)} />
				</div>
				<div>
					<label>Username Basic Auth:</label>
					<input value={usernameBasicAuth} onChange={(e) => setUsernameBasicAuth(e.target.value)} />
				</div>
				<div>
					<label>Passowrd Basic Auth :</label>
					<input value={passwordBasicAuth} onChange={(e) => setPasswordBasicAuth(e.target.value)} />
				</div>
			</div>
			<button onClick={getData} >Get data</button>
		</div>
	);
}

export default App;
