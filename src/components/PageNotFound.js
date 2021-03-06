import React, { Component } from 'react';

export default class PageNotFound extends Component {
	render() {
		const { location } = this.props;
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
						<h1 className="display-3">404</h1>
						<h1>Error</h1>
						<h2>page not found</h2>
						<h3>
							the requested url{' '}
							<span className="text-danger">{location.pathname}</span> is not
							found
						</h3>
					</div>
				</div>
			</div>
		);
	}
}
