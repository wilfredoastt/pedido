import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { connect } from 'react-redux';
import {
	addListPortionsSelected,
	setPortionsSelectedFalse,
} from '../../redux/actions/food';
import ModalItem from './ModalItem';
import { Grid } from '@mui/material';

const ModalPortion = ({
	portions,
	handleSetPortionsSelectedFalse,
	handleAddListPortionsSelected,
}) => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		handleSetPortionsSelectedFalse();
		setOpen(false);
	};

	const handleSave = () => {
		handleAddListPortionsSelected();
		handleClose();
	};

	return (
		<div>
			<Button fullWidth variant="outlined" onClick={handleOpen}>
				+ Agregar porciones
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				scroll="paper"
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
			>
				<DialogTitle id="scroll-dialog-title">Porciones</DialogTitle>
				<DialogContent dividers={true}>
					<Grid container direction="row" spacing={2}>
						{portions.map((portion, index) => (
							<Grid key={index} item xs={6}>
								<ModalItem portion={portion} />
							</Grid>
						))}
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button variant="outlined" color="primary" onClick={handleSave}>
						Aceptar
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		portions: state.food.portions,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleAddListPortionsSelected: () => {
			dispatch(addListPortionsSelected());
		},
		handleSetPortionsSelectedFalse: () => {
			dispatch(setPortionsSelectedFalse());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalPortion);
