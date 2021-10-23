import React, { useEffect, useState } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { connect } from 'react-redux';

const ButtonWhatsapp = ({ food_type_selected, portions_selected }) => {
	const [text, setText] = useState('');
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(isMobileNavigator());
	});

	const isMobileNavigator = () => {
		if (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/BlackBerry/i)
		) {
			return true;
		} else {
			return false;
		}
	};

	const updateTextWhatsApp = () => {
		let text_title = '¡Hola! Te envio mi pedido de Pollos Pepe  %0A';
		let text_body =
			'*' +
			food_type_selected.NAME +
			' 1 unidad(es)  Bs.' +
			food_type_selected.PRICE_UNIT.toFixed(2) +
			'*';
		portions_selected.forEach((portion) => {
			let text_ =
				'*' +
				portion.NAME +
				'* 1' +
				' unidad(es)* - Precio U.: ' +
				'Bs.' +
				' ' +
				portion.PRICE_UNIT.toFixed(2);
			text_body = text_body.concat('%0A', text_);
		});
		let text_price_total =
			'*Total = ' + 'Bs.' + ' ' + calcularPriceTotal() + '*';
		let thanks = '¡Gracias!';
		let text_complete =
			text_title +
			'%0A' +
			text_body +
			'%0A%0A' +
			text_price_total +
			'%0A%0A' +
			thanks;
		setText(text_complete);
	};

	const calcularPriceTotal = () => {
		let precio_total =
			food_type_selected !== null ? food_type_selected.PRICE_UNIT : 0;
		precio_total += costoPortions();
		return precio_total.toFixed(2);
	};

	const costoPortions = () => {
		let costo = 0;
		portions_selected.forEach((portion) => {
			costo += portion.PRICE_UNIT;
		});
		return costo;
	};

	return (
		<Paper
			variant="outlined"
			elevation={3}
			sx={{ backgroundColor: '#FFF', padding: 2 }}
		>
			<Typography>{'Precio total: Bs. ' + calcularPriceTotal()}</Typography>
			<Button
				fullWidth
				startIcon={<WhatsAppIcon />}
				variant="outlined"
				disabled={food_type_selected !== null ? false : true}
				onClick={updateTextWhatsApp}
				href={
					isMobile
						? `https://wa.me/?text=${text}`
						: `https://web.whatsapp.com/send?text=${text}`
				}
				target={isMobile ? '_parent' : '_blank'}
				style={{
					color: food_type_selected !== null ? green['A700'] : green['A100'],
					borderColor:
						food_type_selected !== null ? green['A700'] : green['A100'],
					textTransform: 'none',
				}}
			>
				Compartir pedido por WhatsApp
			</Button>
		</Paper>
	);
};
const mapStateToProps = (state) => {
	return {
		food_type_selected: state.food.food_type_selected,
		portions_selected: state.food.portions_selected,
	};
};

export default connect(mapStateToProps, null)(ButtonWhatsapp);
