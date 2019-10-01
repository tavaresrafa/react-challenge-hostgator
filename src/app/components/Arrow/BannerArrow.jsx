import React, { Component } from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';
import iconArrow from '../../../assets/img/icon-arrow-banner.svg';
import './BannerArrow.scss';

class BannerArrow extends Component {

	handleScrollBottom = () => {
		smoothscroll.polyfill();
		window.scrollTo({	top: document.body.scrollHeight, behavior: 'smooth'	});
	}

	render() {
		return (
			<div className="banner-arrow" onClick={this.handleScrollBottom}>
				<img src={iconArrow} alt="Icon Arrow" />
			</div>
		);
	}
}

BannerArrow.propTypes = {
	handleScrollBottom: PropTypes.func
};

export default BannerArrow;