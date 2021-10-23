import * as React from 'react';
import Card from '@mui/material/Card';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { connect } from 'react-redux';
import { deletePortion } from '../../redux/actions/food';

const PortionItem = ({ portion, handleDeletePortion }) => {
	return (
		<Card sx={{ marginTop: 1, backgroundColor: '#eeeeee' }}>
			<ListItem
				secondaryAction={
					<IconButton
						edge="end"
						aria-label="delete"
						onClick={() => handleDeletePortion(portion)}
					>
						<ClearIcon />
					</IconButton>
				}
			>
				<ListItemText
					primary={portion.NAME}
					secondary={portion.PRICE_UNIT + ' Bs'}
				/>
			</ListItem>
		</Card>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleDeletePortion: (portion) => {
			dispatch(deletePortion(portion));
		},
	};
};
export default connect(null, mapDispatchToProps)(PortionItem);
