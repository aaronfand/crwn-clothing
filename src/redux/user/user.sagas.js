import { takeLatest, put, all, call } from 'redux-saga/effects';


import UserActionTypes from './user.types'
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { googleSignInSucess, googleSignInFailure, emailSignInSucess, emailSignInFailure } from './user.actions';

export function* signInWithGoogle() {
	try {
		const {user} = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call( createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();
		yield put(googleSignInSucess({
			        id: userSnapshot.id,
			        ...userSnapshot.data()
			      }));
	}
	catch(err){
		yield put(googleSignInFailure(err));
	}
}


export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle) ;
}



export function* signInWithEmail({payload: {email, password}}) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword( email, password);
		const userRef = yield call( createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();
		yield put(emailSignInSucess({
			        id: userSnapshot.id,
			        ...userSnapshot.data()
			      }));
	}
	catch (err) {
		put( emailSignInFailure(err) );
	}
}


export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail) ;
}

export function* userSagas() {
	yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
