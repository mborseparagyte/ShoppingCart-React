import React, { Component } from "react";
import Product from "./Product";
import LoadingProducts from "../loaders/Products";
import NoResults from "../empty-states/NoResults";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

class Products extends Component {
  constructor() {
    super();
    this.state = { sort_Value: "" };
  }
  searchingFor(term) {
    return function(x) {
      return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    };
  }
  searchingForCategory(category) {
    return function(x) {
      return (
        x.category.toLowerCase().includes(category.toLowerCase()) || !category
      );
    };
  }
  Sorting(event) {
    this.setState({ sort_Value: event.target.value });
  }
  render() {
    let productsData;
    let term = this.props.searchTerm;
    let category = this.props.searchCategory;
    let x;
    productsData = this.props.productsList
      .filter(this.searchingForCategory(category))
      .filter(this.searchingFor(term))
      .map(product => {
        return (
          <Product
            key={product.id}
            price={product.price}
            name={product.name}
            image={product.image}
            id={product.id}
            addToCart={this.props.addToCart}
            productQuantity={this.props.productQuantity}
            updateQuantity={this.props.updateQuantity}
            openModal={this.props.openModal}
          />
        );
      });

    // Empty and Loading States
    let view;
    if (productsData.length <= 0 && !term) {
      view = <LoadingProducts />;
    } else if (productsData.length <= 0 && term) {
      view = <NoResults />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="div"
          className="products"
        >
          {productsData}
        </CSSTransitionGroup>
      );
    }
    return (
      <div className="products-wrapper">
        <div class="data-list-cont">
          <div class="ais-body">
            <div>
              {productsData.length} results{" "}
              <span class="ais-stats--time">found in 3ms</span>
            </div>
          </div>
          <div class="sort-by">
            <label>Sort by</label>
            <div id="sort-by-selector">
              <select
                data-reactroot=""
                class="ais-sort-by-selector"
                onChange={this.Sorting}
              >
                <option class="ais-sort-by-selector--item" value="ikea">
                  Featured
                </option>
                <option
                  class="ais-sort-by-selector--item"
                  value="ikea_price_asc"
                >
                  Price asc.
                </option>
                <option
                  class="ais-sort-by-selector--item"
                  value="ikea_price_desc"
                >
                  Price desc.
                </option>
              </select>
            </div>
          </div>
        </div>
        {view}
      </div>
    );
  }
}

export default Products;
