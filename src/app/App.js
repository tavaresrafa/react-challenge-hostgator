import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Slider from 'react-slick';
import Header from '../app/layouts/Header';
import Banner from '../app/layouts/Banner';
import Plans from '../app/layouts/Plans';
import ButtonCycle from '../app/components/Button/CycleButton';
import Loading from '../app/components/Loading';
import SliderArrow from '../app/components/Arrow/SliderArrow';
import './App.scss';

class App extends Component {
	state = {
		isLoadingPlans: true,
		activeIndex: 0,
		data: {},
		planoP: {
			name: '',
			price: '',
			discount: '',
			monthPortion: '',
			saving: '',
		},
		planoM: {
			name: '',
			price: '',
			discount: '',
			monthPortion: '',
			saving: '',
		},
		planoTurbo: {
			name: '',
			price: '',
			discount: '',
			monthPortion: '',
			saving: '',
		}
	}

	handleClick = index => this.setState({ activeIndex: index });

	// Calculate 40% of discount
	calculateDiscount = value => value * (100 - 40) / 100;

	// Calculates plans price based on months of cycle
	calculateMonthPortion(value, months) {
		const discountPrice = this.calculateDiscount(value);

		return discountPrice / months;
	}

	// Calculates saving price based on discount
	calculateSaving = (value) => {
		const discountPrice = this.calculateDiscount(value);

		return value - discountPrice;
	}

	// Updates plans prices based on cycle
	handlePlanCycle = (planoP, planoM, planoTurbo) => {
		const {
			pricePlanoP = parseFloat(planoP.priceOrder),
			pricePlanoM = parseFloat(planoM.priceOrder),
			pricePlanoTurbo = parseFloat(planoTurbo.priceOrder),
			priceMonthPortion = planoTurbo.months,
		} = this.state;

		this.setState({
			planoP: {
				name: this.state.data.planoP.name,
				price: pricePlanoP,
				discount: this.calculateDiscount(pricePlanoP),
				monthPortion: this.calculateMonthPortion(pricePlanoP, priceMonthPortion),
				saving: this.calculateSaving(pricePlanoP),
			},
			planoM: {
				name: this.state.data.planoM.name,
				price: pricePlanoM,
				discount: this.calculateDiscount(pricePlanoM),
				monthPortion: this.calculateMonthPortion(pricePlanoM, priceMonthPortion),
				saving: this.calculateSaving(pricePlanoM),
			},
			planoTurbo: {
				name: this.state.data.planoTurbo.name,
				price: pricePlanoTurbo,
				discount: this.calculateDiscount(pricePlanoTurbo),
				monthPortion: this.calculateMonthPortion(pricePlanoTurbo, priceMonthPortion),
				saving: this.calculateSaving(pricePlanoTurbo),
			}
		});
	}

	// Slick methods to navigate in slider
	previous = () => {
		this.slider.slickPrev();
	}

	next = () => {
		this.slider.slickNext();
	}

	componentDidMount() {
		const path = `https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io/prices`;

		Axios.get(path)
		.then((response) => {
			this.setState({
				data: response.data.shared.products,
				isLoadingPlans: false,
			});
		})
		.catch((error) => {
			console.log(error)
		})
		.finally(() => {
			this.handlePlanCycle(
				this.state.data.planoP.cycle.triennially,
				this.state.data.planoM.cycle.triennially,
				this.state.data.planoTurbo.cycle.triennially
			);
		});
	}

	render() {
		let {
			isLoadingPlans,
			data,
			planoP,
			planoM,
			planoTurbo,
		} = this.state;

		// Slick Carousel Settings
		let settings = {
			className: "slider variable-width",
			variableWidth: true,
			dots: false,
			arrows: false,
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		};

		return (
			<Fragment>
				<Header />

				<main className="main" role="main">
					<div className="container-banner">
						<Banner />
					</div>

					<section className="container-plans">
						<p className="text">Quero pagar a cada:</p>
						<div className="wrap-button">
							<ButtonCycle
								name="3 anos"
								index={0}
								isActive={this.state.activeIndex === 0}
								onClick={(e) => {
									this.handleClick(e);
									this.handlePlanCycle(
										data.planoP.cycle.triennially,
										data.planoM.cycle.triennially,
										data.planoTurbo.cycle.triennially
									);
								}}
							/>

							<ButtonCycle
								name="1 ano"
								index={1}
								isActive={this.state.activeIndex === 1}
								onClick={(e) => {
									this.handleClick(e);
									this.handlePlanCycle(
										data.planoP.cycle.annually,
										data.planoM.cycle.annually,
										data.planoTurbo.cycle.annually
									);
								}}
							/>

							<ButtonCycle
								name="1 mês"
								index={2}
								isActive={this.state.activeIndex === 2}
								onClick={(e) => {
									this.handleClick(e);
									this.handlePlanCycle(
										data.planoP.cycle.monthly,
										data.planoM.cycle.monthly,
										data.planoTurbo.cycle.monthly
									);
								}}
							/>
						</div>

							<div className="wrap-plans">
								{isLoadingPlans && (
									<Loading />
								)}

								<SliderArrow arrowclass="arrow -prev" action={this.previous} />
								<SliderArrow arrowclass="arrow -next" action={this.next} />

								{!isLoadingPlans && (
									<Fragment>
										<Slider ref={c => (this.slider = c)} {...settings}>
											<Plans
												plan={planoP.name}
												price={planoP.price}
												discountprice={planoP.discount}
												monthportion={planoP.monthPortion}
												saving={planoP.saving}
											/>
											<Plans
												plan={planoM.name}
												price={planoM.price}
												discountprice={planoM.discount}
												monthportion={planoM.monthPortion}
												saving={planoM.saving}
												planCard="recommended"
											/>
											<Plans
												plan={planoTurbo.name}
												price={planoTurbo.price}
												discountprice={planoTurbo.discount}
												monthportion={planoTurbo.monthPortion}
												saving={planoTurbo.saving}
											/>
										</Slider>
										<div className="legal-text">
											<p>*Confira as condições da promoção</p>
										</div>
									</Fragment>
								)}
							</div>
					</section>
				</main>
			</Fragment>
		);
	}
}

App.propTypes = {
	handleClick: PropTypes.func,
	calculateDiscount: PropTypes.func,
	calculateMonthPortion: PropTypes.func,
	calculateSaving: PropTypes.func,
	handlePlanCycle: PropTypes.func,
	previous: PropTypes.func,
	next: PropTypes.func,
	isLoadingPlans: PropTypes.bool,
	activeIndex: PropTypes.number,
	data: PropTypes.object,
	planoP: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		discount: PropTypes.string.isRequired,
		monthPortion: PropTypes.string.isRequired,
		saving: PropTypes.string.isRequired,
	}),
	planoM: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		discount: PropTypes.string.isRequired,
		monthPortion: PropTypes.string.isRequired,
		saving: PropTypes.string.isRequired,
	}),
	planoTurbo: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		discount: PropTypes.string.isRequired,
		monthPortion: PropTypes.string.isRequired,
		saving: PropTypes.string.isRequired,
	})
}

export default App;