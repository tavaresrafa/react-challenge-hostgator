import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button/PlanButton";
import "./Content.scss";

const Content = ({ price, discountprice, monthportion, saving }) => {
	return (
		<div className="content">
			<div className="equivalent">
				<span className="current-price">
					{price.toLocaleString("pt-br", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
				<span className="discount-price">
					{discountprice.toLocaleString("pt-br", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
				<span className="text">equivalente a</span>
			</div>

			<div className="portion-price">
				<span>R$</span>
				<span className="value">
					{monthportion.toLocaleString("pt-br", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
				<span>/mês</span>
			</div>

			<Button textbutton="Contrate Agora" />

			<div className="domain">
				<span className="text">1 ano de Domínio Grátis</span>
				<span className="save">
					economize{" "}
					{saving.toLocaleString("pt-br", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
				<span className="discount">40% off</span>
			</div>
		</div>
	);
};

Content.propTypes = {
	price: PropTypes.node.isRequired,
	discountprice: PropTypes.node.isRequired,
	monthportion: PropTypes.node.isRequired,
	saving: PropTypes.node.isRequired,
};

export default Content;
