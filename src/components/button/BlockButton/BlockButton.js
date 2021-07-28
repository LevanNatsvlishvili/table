import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from 'components/inputs/adornments/InputLoadingSpinner';


const BlockButton = (props) => {
	const classes = Styles({
		background: props.background,
		color: props.color,
		borderColor: props.borderColor,
		height: props.height,
		width: props.width,
		widthSm: props.widthSm,
		padding: props.padding,
	});
	const { text, icon, inElement, loading, ...rest } = props;
	return (
		<Button className={classes.root}
			startIcon={icon ? <img src={icon} alt='icon' /> : inElement ? inElement : null}
			classes={{ disabled: classes.disabled }}
			{...rest}>
			{!loading ? text : <CircularProgress size={35} thickness={10} />}
		</Button>
	);
}

export default BlockButton;

const Styles = makeStyles((theme) => ({
	root: {
		width: (props) => props.width || '100%',
		height: (props) => (props.height || '54px'),
		border: '1px solid',
		borderColor: (props) => theme.colors[props.borderColor || props.background || 'orange'],
		backgroundColor: (props) => theme.colors[props.background || 'orange'],
		color: (props) => theme.colors[props.color || 'whitePure'],
		padding: props => theme.spacing(props.padding) || null,
		borderRadius: '6px',
		fontWeight: 'bold',
		fontSize: '14px',
		fontFamily: 'fRegular',
		textTransform: 'none',
		'&:hover': {
			backgroundColor: (props) => theme.colors[props.background || 'orange'],
		},
		[theme.breakpoints.down('md')]: {
			width: (props) => props.widthSm,
		},
	},
	disabled: {
		borderColor: (props) => theme.colors[props.borderColor || props.background || 'disabled'],
		backgroundColor: (props) => theme.colors[props.background || 'disabled'],
		color: (props) => theme.colors[props.color || 'whitePure'],

	}
}));