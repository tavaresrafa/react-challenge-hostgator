import React from 'react';
import './Details.scss';

const Details = () => {
	return (
		<div className="wrap-details">
			<ul className="details">
				<li className="item">
					<span className="mark">Para 1 site</span>
				</li>
				<li className="item">
					<span><strong>100 GB</strong> de Armazenamento</span>
				</li>
				<li className="item">
					<span className="mark">Contas de E-mail <strong>Ilimitadas</strong></span>
				</li>
				<li className="item">
					<span>Criador de Sites <strong>Grátis</strong></span>
				</li>
				<li className="item">
					<span>Certificado SSL <strong>Grátis</strong> (https)</span>
				</li>
			</ul>
		</div>
	);
}

export default Details;