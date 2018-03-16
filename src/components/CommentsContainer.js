/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions/commentingActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CommentList from './CommentList';
import CommentForm from './CommentForm';


export class CommentsContainer extends React.Component {

  constructor(props){
    super(props);
    this.addComment=this.addComment.bind(this);
  }
  addComment = (comment) => {
    this.props.actions.addComment(comment,this.props.product_id);
  }


  render() {
    if(typeof this.props.product_id == 'undefined'){
      return (<div></div>);
    }
    return (
      <div className={"comments-container"}>
        <h2>Comments</h2>
        <CommentList comments={this.props.comments} />
        <CommentForm addComment={this.addComment} product_id={this.props.product_id}/>
      </div>
    );
  }
}

const mapStateToProps = function(state, ownProps) {
  if( typeof ownProps.product_id == 'undefined'){
    return {};
  }
  const comments = {...state.comments};
  if(typeof comments.items[ownProps.product_id] == 'undefined'){
    return {
      comments: [],
      product_id:ownProps.product_id
    };
  }else{
    return {
      comments: comments.items[ownProps.product_id],
      product_id:ownProps.product_id
    };
  }
};

const mapDispatchToProps = function(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

CommentsContainer.propTypes = {
  actions : PropTypes.object,
  'actions.addComment':PropTypes.func,
  product_id:PropTypes.number,
  comments:PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsContainer);
