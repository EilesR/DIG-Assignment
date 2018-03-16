/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import CommentsContainer from './CommentsContainer';
import PropTypes from 'prop-types';

export class ProductsDetails extends React.Component {


  render() {
    return (
      <div className={"product-details"}>
      <Link className={"back"} to="/">Homepage</Link>
        <h1>{this.props.title} | {this.props.price + "€"}</h1>
        <Gallery images={this.props.images}/>
        <div className={"product-infos"}>
          <ul>
            <li>Description : {this.props.description}</li>
            <li>Specification : {this.props.specification}</li>
          </ul>
        </div>
        <CommentsContainer product_id={this.props.id}/>
      </div>
    );
  }
}

ProductsDetails.propTypes={
  title:PropTypes.string,
  price:PropTypes.number,
  images:PropTypes.array,
  description:PropTypes.string,
  specification:PropTypes.string,
  id:PropTypes.number,
}

export default ProductsDetails;

