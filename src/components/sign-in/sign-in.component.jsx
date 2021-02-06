import React from 'react';
import { connect } from 'react-redux';

import './sign-in.styes.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user.actions';


class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}


	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword( email, password);
			this.setState({ email: '', password: '' });
		}
		catch (err) {
			console.log( "ERROR signing in", err.message);
		}
	}



	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}


	render() {
		const { googleSignInStart } = this.props;
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput name="email" value={this.state.email} type="email" label="Email" required handleChange={this.handleChange} />
					<FormInput name="password" value={this.state.password} type="password" label="Password" required handleChange={this.handleChange} />
					<div className="buttons">
						<CustomButton type="submit"> Sign In </CustomButton>
						<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Sign In with Google </CustomButton>
					</div>
				</form>
			</div>
		);
	}
}


const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);
