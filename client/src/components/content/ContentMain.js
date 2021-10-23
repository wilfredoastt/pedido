import { Grid, Typography } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import ButtonWhatsapp from './ButtonWhatsapp';
import ContentPortion from './ContentPortion';
import FoodItem from './FoodItem';

const ContentMain = ({ food }) => {
	return (
		<div>
			<Typography variant="h5" component="div" sx={{ marginBottom: 1 }}>
				{food !== null && food.NAME}
			</Typography>
			<Grid container spacing={2} direction="column">
				<Grid container item direction="row" alignItems="stretch" spacing={2}>
					{food !== null &&
						food.FOOD_TYPES.map((food_type, index) => (
							<Grid key={index} item xs={12} sm={6}>
								<FoodItem food_type={food_type} />
							</Grid>
						))}
				</Grid>
				<Grid item xs={12}>
					<ContentPortion />
				</Grid>
				<Grid item>
					<ButtonWhatsapp />
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { food: state.food.food_selected };
};

const mapDispatchToProps = (dispatch) => {
	return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ContentMain);
