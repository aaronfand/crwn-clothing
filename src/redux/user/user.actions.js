import UserActionTypes from './user.types';

export const setCurrentUser = user => ({ 
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user
})


export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START
});


export const googleSignInSucess = (user) => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
	payload: user
});


export const googleSignInFailure = (err) => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
	payload: err
});


export const emailSignInStart = emailAndPassword => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: emailAndPassword
});


export const emailSignInSucess = (user) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
	payload: user
});


export const emailSignInFailure = (err) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
	payload: err
});