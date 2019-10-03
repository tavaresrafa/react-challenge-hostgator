import React, { Component, Fragment } from 'react';
import Header from '../app/layouts/Header';
import Banner from '../app/layouts/Banner';
import PlansList from '../app/layouts/Plans/PlansList';
import './App.scss';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />

				<main className="main" role="main">
					<div className="container-banner">
						<Banner />
					</div>

					<section className="container-plans">
						<PlansList />
					</section>
				</main>
			</Fragment>
		);
	}
}

export default App;