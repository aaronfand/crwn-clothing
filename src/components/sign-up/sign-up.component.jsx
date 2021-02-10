import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';
import './sign-up.styles.scss';
import { signUpStart} from '../../redux/user/user.actions';


class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}


	handleSubmit = async event => {
		event.preventDefault();
		const { signUpStart } = this.props;
		const { displayName, email, password, confirmPassword} = this.state;
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		signUpStart({displayName, email, password});
	}



	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}


	render() {
		const { displayName, email, password, confirmPassword} = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
				<FormInput name="displayName" value={displayName} type="text" label="Display Name" required handleChange={this.handleChange} />
				<FormInput name="email" value={email} type="email" label="Email" required handleChange={this.handleChange} />
				<FormInput name="password" value={password} type="password" label="Password" required handleChange={this.handleChange} />
				<FormInput name="confirmPassword" value={confirmPassword} type="password" label="Confirm Password" required handleChange={this.handleChange} />
					<div className="buttons">
						<CustomButton type="submit"> Sign Up </CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);
