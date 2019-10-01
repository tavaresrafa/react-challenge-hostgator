import React from 'react';
import CheckIcon from '../../../assets/img/icon-check.svg';
import BannerArrow from '../../components/Arrow/BannerArrow';
import './Banner.scss';

const Banner = () => {
	return (
		<section className="banner">
			<h2 className="subtitle">Hospedagem de Sites</h2>
			<h1 className="title">Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</h1>

			<div className="details">
				<div className="wrap-paragraph -first">
					<img className="check-icon" src={CheckIcon} alt=""/>
					<p className="paragraph">99,9% de disponibilidade: seu site sempre no ar</p>
				</div>

				<div className="wrap-paragraph -second">
					<img className="check-icon" src={CheckIcon} alt=""/>
					<p className="paragraph">Suporte 24h, todos os dias</p>
				</div>

				<div className="wrap-paragraph -third">
					<img className="check-icon" src={CheckIcon} alt=""/>
					<p className="paragraph">Painel de Controle cPanel</p>
				</div>
			</div>


			<BannerArrow />
		</section>
	);
}

export default Banner;