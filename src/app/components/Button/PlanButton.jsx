import React from 'react'
import PropTypes from 'prop-types';
import './PlanButton.scss';

const Button = ({ textbutton }) => {
	return (
		<div>
			<button className="cta">
				{textbutton}
			</button>
		</div>
	);
}

Button.propTypes = {
	textbutton: PropTypes.string.isRequired
};

export default Button;
