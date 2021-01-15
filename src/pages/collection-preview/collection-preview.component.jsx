import React from 'react';

import './collection-preview.styles.scss';
import ComponentItem from '../../components/collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<h1 className='title'>{title}</h1>
		<div className='preview'>
			{
				items
					.filter((item, idx) => idx < 4)
					.map(({id,...OtherItemProps}) => (
						<ComponentItem key={id} {...OtherItemProps} />
					))
			}
		</div>
	</div>
)

export default CollectionPreview;