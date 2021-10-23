import React from 'react';
import { List } from '@mui/material';
import { connect } from 'react-redux';

import PortionItem from './PortionItem';
import ModalPortion from '../modal/ModalPortion';

const ContentPortion = ({ portions_selected }) => {
	return (
		<div>
			<ModalPortion />
			<List sx={{ width: '100%' }}>
				{portions_selected.map((portion, index) => (
					<PortionItem key={index} portion={portion} />
				))}
			</List>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { portions_selected: state.food.portions_selected };
};

export default connect(mapStateToProps, null)(ContentPortion);
