import React, {useState} from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import { signUpStart} from '../../redux/user/user.actions';


const SignUp = ({ signUpStart }) => {
	const [userCredentials, setCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	const { displayName, email, password, confirmPassword} = userCredentials;


	const handleSubmit = async event => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		signUpStart({displayName, email, password});
	}



	const handleChange = event => {
		const { name, value } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	}


		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput name="displayName" value={displayName} type="text" label="Display Name" required handleChange={handleChange} />
				<FormInput name="email" value={email} type="email" label="Email" required handleChange={handleChange} />
				<FormInput name="password" value={password} type="password" label="Password" required handleChange={handleChange} />
				<FormInput name="confirmPassword" value={confirmPassword} type="password" label="Confirm Password" required handleChange={handleChange} />
					<div className="buttons">
						<CustomButton type="submit"> Sign Up </CustomButton>
					</div>
				</form>
			</div>
		);
	
}

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);
