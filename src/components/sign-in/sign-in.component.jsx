import React from 'react';

import './sign-in.styes.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}


	handleSubmit = event => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	}



	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}


	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput name="email" value={this.state.email} type="email" label="Email" required handleChange={this.handleChange} />
					<FormInput name="password" value={this.state.password} type="password" label="Password" required handleChange={this.handleChange} />
					<CustomButton type="submit"> Sign In </CustomButton>
					<CustomButton onClick={signInWithGoogle}> Sign In with Google </CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
