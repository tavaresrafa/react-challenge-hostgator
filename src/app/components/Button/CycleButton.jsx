import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onRadio from '../../../assets/img/icon-radio-on.svg';
import offRadio from '../../../assets/img/icon-radio-off.svg';
import './CycleButton.scss';

class ButtonCycle extends Component {
	handleClick = () => this.props.onClick(this.props.index)

	render() {
		return (
			<div
				role='button'
				className={`button ${this.props.isActive ? 'selected' : ''}`}
				onClick={this.handleClick}
				onKeyPress={this.handleClick}
			>
				<div className="radio">
					<img className="off" src={offRadio} alt="Radio off"/>
					<img className="on" src={onRadio} alt="Radio On"/>
				</div>
				<span className="text">{this.props.name}</span>
			</div>
		)
	}
}

ButtonCycle.propTypes = {
	isActive: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	handleClick: PropTypes.func,
};

export default ButtonCycle;