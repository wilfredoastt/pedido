import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { deepOrange } from '@mui/material/colors';
import CardActionArea from '@mui/material/CardActionArea';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';

import { connect } from 'react-redux';
import { changeFoodTypeSelected } from '../../redux/actions/food';

const FoodItem = ({
	food_type,
	food_type_selected,
	onChangeFoodTypeSelected,
}) => {
	return (
		<Card
			sx={{
				height: '100%',
			}}
		>
			<CardActionArea
				sx={{ height: '100%' }}
				onClick={() => onChangeFoodTypeSelected(food_type.NAME)}
			>
				<Box
					sx={{
						display: 'flex',
						p: 1,
						paddingRight: 2,
						paddingLeft: 2,
						bgcolor: '#eceff1',
					}}
				>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{food_type.NAME}
					</Typography>
					{food_type_selected !== null &&
					food_type.NAME === food_type_selected.NAME ? (
						<Avatar alt="Icon" sx={{ bgcolor: deepOrange[500] }}>
							<CheckIcon />
						</Avatar>
					) : (
						<Avatar alt="Icon" sx={{ bgcolor: '#FFF' }}>
							{' '}
						</Avatar>
					)}
				</Box>
				<CardMedia
					component="img"
					height="194"
					image={food_type.URL_IMG}
					alt="Imagen"
				/>
				<CardContent sx={{ height: '100%' }}>
					<Typography variant="h6" color="primary">
						{food_type.PRICE_UNIT} {'Bs.'}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{food_type.DESCRIPTION}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

const mapStateToProps = (state) => {
	return { food_type_selected: state.food.food_type_selected };
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeFoodTypeSelected: (name) => {
			dispatch(changeFoodTypeSelected(name));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
