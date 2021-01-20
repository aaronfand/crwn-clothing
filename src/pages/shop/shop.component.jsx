import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';


const ShopPage = ({ collections }) => (
	<div className="shop-page">
		{
			collections.map(({ id, ...OtherCollectionProps }) => (
				<CollectionPreview key={id} {...OtherCollectionProps} />
			))
		}
	</div>
)


const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
})


export default connect(mapStateToProps)(ShopPage);
