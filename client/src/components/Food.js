import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { connect } from 'react-redux';
import {
	changeFoodSelected,
	setPortionsSelectedFalse,
	startFoodGet,
} from '../redux/actions/food';
import ContentMain from './content/ContentMain';

const drawerWidth = 240;

function Food({
	window,
	foods,
	food_selected,
	handleGetFoods,
	handleSetPortionsSelectedFalse,
	handleChangeFoodSelected,
}) {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const changeFood = (food) => {
		if (food_selected._id !== food._id) {
			handleChangeFoodSelected(food._id);
		}
	};

	const drawer = (
		<div>
			<Toolbar style={{ backgroundColor: '#eeeeee' }}>
				<Typography variant="h6">Tipos de Platos</Typography>
			</Toolbar>
			<Divider />
			<List>
				{foods.map((food, index) => (
					<ListItem
						selected={food_selected._id === food._id ? true : false}
						button
						key={index}
						onClick={() => changeFood(food)}
					>
						<ListItemText primary={food.NAME} />
					</ListItem>
				))}
			</List>
			<Divider />
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	React.useEffect(() => {
		handleGetFoods();
	}, []);

	React.useEffect(() => {
		handleSetPortionsSelectedFalse();
	}, [food_selected]);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Pollos Pepe
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				<ContentMain />
			</Box>
		</Box>
	);
}

Food.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

const mapStateToProps = (state) => {
	return { foods: state.food.foods, food_selected: state.food.food_selected };
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleGetFoods: () => {
			dispatch(startFoodGet());
		},
		handleChangeFoodSelected: (_id) => {
			dispatch(changeFoodSelected(_id));
		},
		handleSetPortionsSelectedFalse: () => {
			dispatch(setPortionsSelectedFalse());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Food);
