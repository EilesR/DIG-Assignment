import React from 'react';
import PropTypes from 'prop-types';

export class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state={};
    if (typeof props.images !== 'undefined') {
      this.state = {
        selectedImageIndex : 0
      }
    }
    this.handleThumbClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (typeof nextProps.images !== 'undefined' && JSON.stringify(nextProps) != JSON.stringify(this.props)){
      this.setState({
        selectedImageIndex : 0
      });
    }
  }
  
  render() {
    if (typeof this.props.images === 'undefined') {
      return (<div></div>);
    }
    var images = this.props.images;
    return (
      <div className={"gallery"}>
        <div className={"selected-image"}>
          <img src={images[this.state.selectedImageIndex].original}></img>
        </div>
        <div className={"thumbnails"}>
          {images.map((image,index) => {
            const className = index == this.state.selectedImageIndex?"selected":"";
            return <img className={className} key={index} src={image.thumb} onClick={() => this.handleThumbClick(index)}></img>
          })}
        </div>
      </div>
    );
  }

  handleThumbClick(index){
    this.setState({
      selectedImageIndex:index
    })
  }
}

Gallery.propTypes={
  images:PropTypes.array
}

export default Gallery;