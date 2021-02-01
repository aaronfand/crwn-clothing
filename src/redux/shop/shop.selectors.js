import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

// import collectionItemComponent from '../../components/collection-item/collection-item.component';


// const COLLECTION_ID_MAP = {
// 	hats: 1,
// 	sneakers: 2,
// 	jackets: 3,
// 	womens: 4,
// 	mens: 5
// }

const selectShop = state => state.shop;


export const selectShopCollections = createSelector(
	[selectShop],
	shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
	[selectShopCollections],
	collections =>
		collections ? Object.keys(collections).map(key => collections[key]) : []
);


export const selectCollection = memoize((collectionUrlParam) =>
	createSelector(
		[selectShopCollections],
		collections => (collections ? collections[collectionUrlParam] : [])
	)
);


export const selectIsComponentFetching = createSelector(
	[selectShop],
	shop => shop.isFetching
)
