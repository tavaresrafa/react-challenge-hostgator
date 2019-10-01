import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../../assets/img/icon-arrow.svg';
import './SliderArrow.scss';

const IconArrow = ({ arrowclass, action }) => {
	return (
		<div className={arrowclass} onClick={action}>
			<img src={Arrow} alt="Arrow" />
		</div>
	);
}

IconArrow.propTypes = {
	arrowclass: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired,
};

export default IconArrow;
