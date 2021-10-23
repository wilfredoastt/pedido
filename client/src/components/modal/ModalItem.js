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
import { changePortionSelected } from '../../redux/actions/food';

const ModalItem = ({ portion, handleChangePortionSelected }) => {
	return (
		<Card
			sx={{
				height: '100%',
			}}
		>
			<CardActionArea
				sx={{ height: '100%' }}
				onClick={() => handleChangePortionSelected(portion)}
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
						{portion.NAME}
					</Typography>

					{portion.selected ? (
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
					image={portion.URL_IMG}
					alt="Imagen"
				/>
				<CardContent sx={{ height: '100%' }}>
					<Typography variant="h5" color="primary">
						{portion.PRICE_UNIT} {'Bs.'}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{portion.DESCRIPTION}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleChangePortionSelected: (list) => {
			dispatch(changePortionSelected(list));
		},
	};
};
export default connect(null, mapDispatchToProps)(ModalItem);
