import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import Details from './Details';
import PlanIcon from '../../../assets/img/icon-plan-1.svg';
import './index.scss';

const Plans = ({ plan, price, discountprice, monthportion, saving, planCard }) => {
	return (
		<div className={`plan-card ${planCard}`}>
			<div className="item" />
			<div className="header">
				<img className="icon" src={PlanIcon} alt="Icon's Plan" />
				<h3 className="title">
					{plan}
				</h3>
			</div>

			<Content
				price={price}
				discountprice={discountprice}
				monthportion={monthportion}
				saving={saving}
			/>

			<Details />
			<div className="item -bottom" />
		</div>
	);
}

Plans.defaultProps = {
	planCard: '',
};

Plans.propTypes = {
	plan: PropTypes.string.isRequired,
	planCard: PropTypes.string.isRequired,
	price: PropTypes.node.isRequired,
	discountprice: PropTypes.node.isRequired,
	monthportion: PropTypes.node.isRequired,
	saving: PropTypes.node.isRequired
};


export default Plans;