import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './Routes/Header';
import Footer from './Routes/Footer';
import Products from './Routes/Products';
import ProductDetails from './Routes/ProductDetails';
import React from 'react';
import ProductAdd from './Routes/productAdd';


class App extends React.Component
{
  constructor(){
    super();
    this.state = {
      productsList : [
        {id:1, name: "Bread", price: 10, quantity: 10, productImg: "bread.jpg", productDesc: "Fresh bread"},
        {id:2, name: "Cake", price: 60, quantity: 2, productImg: "cake.jfif", productDesc: "Plain Vanilla Cake"},
        {id:3, name: "Pizza", price: 200, quantity: 1, productImg: "pizza.jfif", productDesc: "Medium Size Pizza"},
        {id:4, name: "Biscuit", price: 5, quantity: 12, productImg: "biscuit.jfif", productDesc: "Oat Biscuits"}
      ],
      ProductItem:{id:0, name: "", price: 0, quantity: 0, productImg: "", productDesc: ""},
      
    };
  }

  AddItem = (_newObject) => {
    let newArray = [...this.state.productsList, _newObject];
    this.setState({
      productsList: newArray,
    });
  };

  RemoveHandler = (_objectIndex) => {
    this.state.productsList.splice(_objectIndex, 1);
    this.setState({
      productsList: this.state.productsList
    });
  };

  DetailsHandler = (_objectIndex) => {
    this.setState({
      ProductItem: this.state.productsList[_objectIndex]
    });
  };

  render() {
    if(this.props.Role == "Admin")
    {
      return (
        <>
          <div className="App m-3">
            <Router>
            <Header />
            <Route component={(props) => <Products  ProductData={this.state.productsList} RemoveHandlerRef = {this.RemoveHandler}
            DetailsHandlerRef = {this.DetailsHandler} {...props}/>} path="/" exact /> 
            <Route component={(props) => <ProductAdd  AddHandlerRef={this.AddItem} {...props}/>} path="/Add"/>
            <Route component={(props) => <ProductDetails Data={this.state.ProductItem}  {...props}/>} path="/Details"/>
            <Footer />
            </Router>
          </div>
          
        </>
      );
    }
    else
    {
      return (
        <>
          <div className="App m-3">
            <h3>Welcome User</h3>
          </div>
          
        </>
      );
    }
  }
}

export default App;
