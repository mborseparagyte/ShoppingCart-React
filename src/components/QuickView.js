import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import Counter from "./Counter";
class QuickView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedProduct: {},
			quickViewProdcut: {},
			buttonLabel: "ADD TO CART"
		};
	}
	componentDidMount() {
		document.addEventListener(
			"click",
			this.handleClickOutside.bind(this),
			true
		);
	}

	componentWillUnmount() {
		document.removeEventListener(
			"click",
			this.handleClickOutside.bind(this),
			true
		);
	}

	handleClickOutside(event) {
		const domNode = findDOMNode(this.refs.modal);
		if (!domNode || !domNode.contains(event.target)) {
			this.props.closeModal();
		}
	}

	handleClose() {
		this.props.closeModal();
	}
	addToCart(image, name, price, id, quantity) {
		this.setState(
			{
				selectedProduct: {
					image: image,
					name: name,
					price: price,
					id: id,
					quantity: quantity
				}
			},
			function() {
				this.props.addToCart(this.state.selectedProduct);
			}
		);
		this.setState(
			{
				buttonLabel: "✔ ADDED"
			},
			function() {
				setTimeout(() => {
					this.setState({
						buttonLabel: "ADD TO CART",
						selectedProduct: {}
					});
				}, 5000);
			}
		);
	}
	render() {
		let image = "https://test.workpay.io" + this.props.image;
		let name = this.props.name;
		let price = this.props.price;
		let id = this.props.id;
		let quantity = this.props.productQuantity;
		return (
			<div
				className={
					this.props.openModal ? "modal-wrapper active" : "modal-wrapper"
				}>
				<div className="modal" ref="modal">
					<button
						type="button"
						className="close"
						onClick={this.handleClose.bind(this)}>
						&times;
					</button>
					<div className="quick-view">
						<div className="quick-view-image">
							<img
								src={this.props.product.image}
								alt={this.props.product.name}
							/>
						</div>
						<div className="quick-view-details">
							<span className="product-name">{this.props.product.name}</span>
							<span className="product-price">{this.props.product.price}</span>
						</div>
						<div className="">
							<Counter
								productQuantity={quantity}
								updateQuantity={this.props.updateQuantity}
								resetQuantity={this.resetQuantity}
							/>
              <div className="product-action center-xs addCartToQuickView">
								<button
									type="button"
									onClick={this.addToCart.bind(
										this,
										image,
										name,
										price,
										id,
										quantity
									)}>
									{this.state.buttonLabel}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default QuickView;
