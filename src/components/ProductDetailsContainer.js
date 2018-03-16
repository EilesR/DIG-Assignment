import React from 'react';
import * as actions from '../actions/productsFetchingActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductDetails from './ProductDetails';
import PropTypes from 'prop-types';


export class ProductDetailsContainer extends React.Component {

  fetchProducts = () => {
    this.props.actions.fetchProducts(this.props.fetchProducts);
  }

  componentDidMount(){
    //Used only if you're refreshing the page the product details
    if(!this.props.product){
      this.fetchProducts();
    }
  }


  render() {
    return (
      <ProductDetails {...this.props.product} />
    );
  }
}

const mapStateToProps = function(state, ownProps) {
  const product = state.products.items.find(item => item.id == ownProps.match.params.id);
  return {
    product: product
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

ProductDetailsContainer.propTypes = {
  actions : PropTypes.object,
  "actions.fetchProducts" :PropTypes.func,
  fetchProducts:PropTypes.func,
  product:PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsContainer);
