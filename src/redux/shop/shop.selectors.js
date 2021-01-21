import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

import collectionItemComponent from '../../components/collection-item/collection-item.component';


const COLLECTION_ID_MAP = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5
}

const selectShop = state => state.shop;


export const selectShopCollections = createSelector(
	[selectShop],
	shop => shop.collections
)

const findCollection = ( collections, param) => {
	const targetId = COLLECTION_ID_MAP[param];
	console.log("findCollection", collections, param, targetId);
	const found = collections.find(i => {return i.id === targetId;});
	console.log("found", collectionItemComponent.id, param, COLLECTION_ID_MAP[param], found);
	return found;
}

export const selectCollection = (collectionUrlParam) => createSelector(
	[selectShopCollections],
	collections => findCollection(collections, collectionUrlParam)
	
);

