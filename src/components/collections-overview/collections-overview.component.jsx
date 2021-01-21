import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-overview.styles.scss';

import CollectionPreview from '../../pages/collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => (
	<div className="collections-overview">
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


export default connect(mapStateToProps)(CollectionsOverview);