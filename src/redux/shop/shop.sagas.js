import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.type';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapShot = yield collectionRef.get();
		yield console.log("fetchCollectionsAsync4", snapShot);
		const collectionsMap = yield call( convertCollectionsSnapshotToMap, snapShot) ;
		console.log("collectionsMap", collectionsMap);
		yield put(fetchCollectionsSuccess(collectionsMap));
	}
	catch (err) {
		console.log("err.message", err.message);
		yield put(fetchCollectionsFailure(err.message));
	}
}


export function* fetchCollectionsStart() {
	yield takeLatest(
		ShopActionTypes.FETCH_COLLECTIONS_START, 
		fetchCollectionsAsync)
}

