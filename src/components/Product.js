import React from 'react'; 
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Product extends React.Component {

  render() {
    const {id, images, title, price} = this.props;
    return (
      <Link to={"/details/"+id}>
        <div className={"product"}>
          <div className={"product-image-container"}>
            <img src={images[0].thumb}/>
          </div>
          <div className={"infos"}>
            <div className={"title"}>
              {title}
            </div>
            <div className={"price"}>
              {price+"€"}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

Product.propTypes = {
  id:PropTypes.number,
  images:PropTypes.array,
  title:PropTypes.string,
  price:PropTypes.number
};



export default Product;