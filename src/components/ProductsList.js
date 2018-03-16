/* eslint-disable import/no-named-as-default */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/productsFetchingActions';
import Product from './Product';

export class ProductsList extends React.Component {
  fetchProducts = () => {
    this.props.actions.fetchProducts(this.props.fetchProducts);
  }

  componentDidMount(){
    this.fetchProducts();
  }

  render() {
    const {items, error, loading} = this.props;

    if(error){
      return <div>Error while trying to fetch the products : {error.message} </div>
    }

    if(loading){
      return <div>Loading</div>
    }
    
    return (
      <div className={"product-list"}>
        {items.map(product => 
          <Product key={product.id} {...product}></Product>
        )}
      </div>
    );
  }
}

ProductsList.propTypes = {
  actions : PropTypes.object,
  items :PropTypes.array,
  error:PropTypes.object,
  loading:PropTypes.bool,
  fetchProducts:PropTypes.func,
};

function mapStateToProps(state) {
  return state.products;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
