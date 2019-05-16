import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';
import ProductList from './components/ProductList';
import { Switch, Route } from 'react-router-dom';
import Modal from './components/Modal';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path="/" exact component={ProductList} />
				<Route path="/details" exact component={Details} />
				<Route path="/cart" component={Cart} />
				<Route component={PageNotFound} />
			</Switch>
			<Modal />
		</>
	);
}

export default App;
