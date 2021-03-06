import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
	render() {
		return (
			<>
				<div className='py-5'>
					<div className='container'>
						<Title name='Our' title='Products' />

						<div className='row'>
							<ProductConsumer>
								{value => {
									return value.products.map(prod => {
										return <Product product={prod} key={prod.id} />;
									});
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</>
		);
	}
}
