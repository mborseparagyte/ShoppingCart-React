import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "./components/Header";
import Products from "./components/Products";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import QuickView from "./components/QuickView";
import "./styles.css";

const headers = {
  accept: "application/json",
  authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTcEJjejBIdW01dVlGYnV2T2pQMGdkRml3VSIsImtpZCI6ImpTcEJjejBIdW01dVlGYnV2T2pQMGdkRml3VSJ9.eyJpc3MiOiJodHRwczovL2RldmF1dGgucDEwLmlvL2F1dGgiLCJhdWQiOiJodHRwczovL2RldmF1dGgucDEwLmlvL2F1dGgvcmVzb3VyY2VzIiwiZXhwIjoxNTIzMzQ1MTM3LCJuYmYiOjE1MjI3NDAzMzcsImNsaWVudF9pZCI6IjZCOUQ0M0QzMDgyMkY5NzZERUExRjM5QTFDMjZEQTY5NzQxNjdDMUMzQkY3QkIwRkQzNjlCNjhCREQ3ODgxNUMiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJvZmZsaW5lX2FjY2VzcyIsImJhYXMiXSwic3ViIjoicmlzaGlrZXNoQGJpdHBvZC5pbyIsImF1dGhfdGltZSI6MTUyMjc0MDMzNiwiaWRwIjoicDEwT0F1dGgiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.wMtWRmiKsDq2NxpAzO4K4dnn3gmS82VURrx_fQPht3gW9vfTdq-CYtRA14P3QC9VtEpUR4nUgJTWjPrtHYtkCNRk4ACR4jBsNepDsm_oNVVkGfn3-7Rfnwlc2roqUcogl78Ny2mGIPNPmDHaf3K37F8GRKeB_qFIepk9quHK6Skxk6boHx2rxfppl-GxoBR9DcaqqqFmavWi3JA-NmvYUt6I5aAll8tgSV2mAuvrMfJ6abzNAByIYNYaKKhKSFhPiDb9P9KdiH9QVK4agmIHaln73Ftt4_MbaMltM_wHJuEwxV9cj-oPq0QsByKIsqico5MUaAwU-PNgd8lWXWyy3w"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      category: "",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Fetch Initial Set of Products from external API
  getProducts() {
    //For Localhost use the below url
    const url =
      "https://peoplesure_testapp-lv1ws.test.p10.io/svc/api/Products/getUIProductJSON";

    // axios.get(url).then(response => {
    //   this.setState({
    //     products: response.data.result
    //   });

    axios({
      method: "get",
      url: url,
      headers: headers
    }).then(response => {
      this.setState({
        products: response.data.result
      });
    });

    // const url = "src/products.json";
    // //const url="https://quarkbackend.com/getfile/sivadass/products";
    // axios.get(url)
    // 	.then(response => {
    // 		this.setState({
    // 			products : response.data
    // 		})
    // 	})
  }

  getCategories() {
    //For Localhost use the below url
    const url =
      "https://peoplesure_testapp-lv1ws.test.p10.io/svc/api/Categories";

    // axios.get(url).then(response => {
    //   this.setState({
    //     products: response.data.result
    //   });

    axios({
      method: "get",
      url: url,
      headers: headers
    }).then(response => {
      console.log(response);
      this.setState({
        categories: response.data
      });
    });

    // const url = "src/products.json";
    // //const url="https://quarkbackend.com/getfile/sivadass/products";
    // axios.get(url)
    // 	.then(response => {
    // 		this.setState({
    // 			products : response.data
    // 		})
    // 	})
  }
  componentWillMount() {
    //this.getProducts();
  }
  componentDidMount() {
    this.getProducts();
    this.getCategories();
  }

  // Search by Keyword
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }
  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ category: event.target.value });
    console.log(this.state.category);
  }
  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      console.log("hi");
      let index = cartItem.findIndex(x => x.id == productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true
    });
    setTimeout(
      function() {
        this.setState({
          cartBounce: false,
          quantity: 1
        });
        console.log(this.state.quantity);
        console.log(this.state.cart);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === productID;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
  }
  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
  }

  //Reset Quantity
  updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      quantity: qty
    });
  }
  // Open Modal
  openModal(product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cartItems={this.state.cart}
          removeProduct={this.handleRemoveProduct}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          handleCategory={this.handleCategory}
          categoryTerm={this.state.category}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
        />
        <Aside categories={this.state.categories} />
        <Products
          productsList={this.state.products}
          searchTerm={this.state.term}
          addToCart={this.handleAddToCart}
          productQuantity={this.state.quantity}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
        />
        <Footer />
        <QuickView
          product={this.state.quickViewProduct}
          openModal={this.state.modalActive}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
